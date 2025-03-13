// Función asíncrona para realizar peticiones, recibe como parámetro la URL
const solicitarDatos = async (url) => {
  let datos = await fetch(url); // Se realiza la solicitud utilizando la API fetch, que devuelve una promesa en respuesta a la petición
  return await datos.json(); // Retorna la respuesta de la petición convertida a formato JSON para poder trabajar con los datos como objetos JavaScript
}

//Función para solicitar los datos del usuarios, recibe como parámetro la url 
const solicitarUsuarios = async (url) => await solicitarDatos(`${url}/users`); // Llamamos a la función solicitardatos que nos ayudará a realizar la petición

//Función para solicitar los post de un usuario, recibe como parámetro la url a realizar la peticion y el id del usuario
const solicitarPosts = async (url, idUser) => await solicitarDatos(`${url}/posts?userId=${idUser}`); // Llamamos a la función solicitar datos que nos ayudará a realizar la petición

//Función para solicitar los comentarios de un post, recibe como parámetro la url a realizar la peticion y el id del post
const solicitarComentarios = async (url, idPost) => await solicitarDatos(`${url}/comments?postId=${idPost}`); // Llamamos a la función solicitar datos que nos ayudará a realizar la petición

//Función para solicitar los albumes de un usuario, recibe como parámetro la url a realizar la peticion y el id del usuario
const solicitarAlbumes = async (url, idUser) => await solicitarDatos(`${url}/albums?userId=${idUser}`);// Llamamos a la función solicitar datos que nos ayudará a realizar la petición

//Función para solicitar las fotos de un album, recibe como parámetro la url a realizar la peticion y el id del album
const solicitarFotos = async (url, idAlbum) => await solicitarDatos(`${url}/photos?álbumId=${idAlbum}`);// Llamamos a la función solicitar datos que nos ayudará a realizar la petición

// Función asíncrona para obtener toda la información relacionada a los usuarios, sus posts, comentarios, álbumes y fotos
const url = "https://jsonplaceholder.typicode.com";

// Función para obtener toda la información solicitada
const obtenerInformacion = async (url) => {
  //Bloque try..catch para manejar errores que puedan surgir durante las peticiones
  try {
    //Solicitamos los datos de los usuarios
    let usuarios = await solicitarUsuarios(url);

    // Se recorre el arreglo de usuarios con el método map, en donde cada elemento es procesado de manera asíncrona
    let datosUsuarios = await Promise.all( usuarios.map( async (usuario) => { //Se utiliza Promise.all para esperar a que todas las promesas retornadas por la función map se cumplan.

      // Para cada usuario, se solicitan los posts de dicho usuario
      let posts = await solicitarPosts(url, usuario.id);

      // Se recorre el arreglo de posts de cada usuario, nuevamente usando 'map' de forma asíncrona
      let datosPosts = await Promise.all( posts.map ( async (post) => {

        // Para cada post, se solicitan los comentarios correspondientes a dicho post
        let comentarios = await solicitarComentarios(url, post.id);

        // Se retorna un objeto con las propiedades que indiquemos, que incluye el título, contenido del post y los comentarios correspondientes (con su nombre y contenido)
        return {
          titulo: post.title,
          contenido: post.body,
          comentarios: comentarios.map((comentario) => (
            {nombre: comentario.name,
            comentario: comentario.body}))};
      }));

      // Se solicitan los álbumes del usuario
      let albumes = await solicitarAlbumes(url, usuario.id);

      // Se recorre el arreglo de álbumes del usuario de manera asíncrona
      let datosAlbumes = await Promise.all(albumes.map(async (album) => {

        // Para cada álbum, se solicitan las fotos correspondientes
        let fotos = await solicitarFotos(url, album.id);

        // Se retorna un objeto con el título del álbum y un arreglo de las fotos con sus datos
        return {
          titulo: album.title,
          fotos: fotos.map((foto) => (
            {titulo: foto.title,
            url: foto.url,
            urlMiniatura: foto.thumbnailUrl}))};
      }));

      // Se retorna un objeto que contiene la información del usuario, sus posts y álbumes
      return {
        id: usuario.id,
        nombre: usuario.name,
        posts: datosPosts,
        albumes: datosAlbumes};        
    }));
    
    // Se retorna el arreglo de usuarios con toda la información solicitada
    return datosUsuarios;

  } catch (error) {

    // Si ocurre algún error durante el proceso, se lanza un error con el mensaje correspondiente 
    throw new Error("Ha ocurrido un error en las peticiones: " + error);
  }
}

// Se llama a la función y se maneja la solución o el error de la promesa
obtenerInformacion(url).then(console.log, console.error);
