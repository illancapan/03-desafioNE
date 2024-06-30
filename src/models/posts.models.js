import pool from "../../database/config.js";

// MODELO DE GET
export const getAllPostsModels = async () => {
    const SQLquery = { text: "SELECT * FROM posts" };
    const result = await pool.query(SQLquery);
    return result.rows[0];
};

// MODELO DE POSTS

export const postAllPostsModels = async () => {
    const sql =
        "INSERT INTO posts (titulo, img,descripcion,likes) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [titulo, img, descripcion, likes];
    try {
        const result = await pool.query(sql, values);
        return result.rows[0];
    } catch (error) {
        console.log(error.message)
        trhow error;
        
    }
};
