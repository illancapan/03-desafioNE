import {
    getAllPostsModels,
    postAllPostsModels,
} from "../models/posts.models.js";

export const getAllPost = async (req, res) => {
    try {
        const posts = await getAllPostsModels();
        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const postAllPost = async (req, res) => {
    const { titulo, img, descripcion, likes } = req.body;
    try {
        const nuevoPost = await postAllPostsModels(titulo, img, descripcion, likes);
        res.status(200).json({ post: nuevoPost });
    } catch (error) {
        console.error('Error al crear el post:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};



// import {
//     getAllPostsModels,
//     postAllPostsModels,
// } from "../models/posts.models.js";


// // export const getAllPost = async (req, res) => {
// //     try {
// //         const posts = await getAllPostsModels();
// //         res.status(200).json({ posts }); // Devuelve los posts obtenidos como JSON
// //     } catch (error) {
// //         console.log(error);
// //         res.status(500).json({ error: error.message });
// //     }
// // };

// export const getAllPost = async (req, res) => {
//     try {
//         const posts = await getAllPostsModels();
//         res.status(200).json({ posts });
//         // res.json(posts);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: error.message });
//     }
// };

// export const postAllPost = async (req, res) => {
//     const { titulo, img, descripcion, likes } = req.body;
//     try {
//         const nuevoPosts = await postAllPostsModels(titulo, img, descripcion, likes);
//         res.status(200).json({post: nuevoPosts});
//     } catch (error) {
//         console.error('Error al crear el post:', error);
//         res.status(500).json({ error: 'Error interno del servidor' });
//     }
// };

// // export const postAllPost = async (req, res) => {
// //     const { titulo, img, descripcion, likes } = req.body;
// //     try {
// //         const nuevoPosts = await postAllPostsModels(titulo, img, descripcion, likes);
// //         res.status(200).json({ nuevoPosts: result.rows });
// //         res.json(posts);
// //     } catch (error) {
// //         console.log(error);
// //         res.status(500).json({ error: 'Error interno del servidor' error.message });
// //     }
// // };
