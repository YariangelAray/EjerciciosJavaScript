const solicitarDatos = async (url) => {
    let datos = await fetch(url);
    return await datos.json();
}

const solicitarUsuarios = async () => {
    return await solicitarDatos("https://jsonplaceholder.typicode.com/users");
}

const solicitarPosts = async (idUser) => {
    return await solicitarDatos(`https://jsonplaceholder.typicode.com/posts?userId=${idUser}`);
}

const solicitarComentarios = async (idPost) => {
    return await solicitarDatos(`https://jsonplaceholder.typicode.com/comments?postId=${idPost}`);
}


const obtenerInformacion = async (url) => {
    try {
        let usuarios = await solicitarUsuarios();
    
        let datosUsuarios = await Promise.all( usuarios.map( async (usuario) => {
    
            let posts = await solicitarPosts(usuario.id);
    
            let datosPosts = await Promise.all( posts.map ( async (post) => {
    
                let comentarios = await solicitarComentarios(post.id);
    
                return {
                    titulo: post.title,
                    contenido: post.body,
                    comentarios: comentarios.map((comentario) => (
                        {nombre: comentario.name,
                        comentario: comentario.body}
                    ))
                };

            }));
    
            return {
                id: usuario.id,
                nombre: usuario.name,
                posts: datosPosts
            };

        }));
     
        return datosUsuarios;

    } catch (error) {
        throw new Error("Ha ocurrido un error en las peticiones: " + error);
    }
}

obtenerInformacion().then(console.log, console.error);
