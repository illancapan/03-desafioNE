import pool from "../../database/config.js";



// MODELO DE GET
export const getAllPostsModels = async () => {
    const SQLquery = { text: "SELECT * FROM posts" };
    const result = await pool.query(SQLquery);
    return result.rows[0];
};

// MODELO DE POSTS