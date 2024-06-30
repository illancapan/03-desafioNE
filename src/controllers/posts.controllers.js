import {getAllPostsModels} from "../models/posts.models.js"

export const getAllPost = async (req, res) => {
   try {
       const posts = await getAllPostsModels()
       res.status(200).json({ posts: result.rows });
       res.json(posts)
    
   } catch (error) {
    console.log(error);
        res.status(500).json({ error: error.message });
   }
}