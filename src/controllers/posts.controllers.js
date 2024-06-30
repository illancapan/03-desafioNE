import {
    getAllPostsModels,
    postAllPostsModels,
} from "../models/posts.models.js";

export const getAllPost = async (req, res) => {
    try {
        const posts = await getAllPostsModels();
        res.status(200).json({ posts: result.rows });
        res.json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const postAllPost = async (req, res) => {
    const { titulo, img, descripcion, likes } = req.body;
    try {
        const posts = await postAllPostsModels(titulo, img, descripcion, likes);
        res.status(200).json({ posts: result.rows });
        res.json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};
