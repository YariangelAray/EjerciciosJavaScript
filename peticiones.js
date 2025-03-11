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
    
            let datosPosts = await solicitarPosts(usuario.id);
    
            let posts = await Promise.all( datosPosts.map ( async (post) => {
    
                let comentarios = await solicitarComentarios(post.id);
    
                return {...post, comentarios};
            }));
    
            return {...usuario, posts};
        }));
     
        return datosUsuarios;
    } catch (error) {
        throw new Error("Ha ocurrido un error en las peticiones: " + error);
    }
}

obtenerInformacion().then(console.log, console.error);