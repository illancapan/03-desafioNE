import pool from "../../database/config.js";

// get

export const getImages = async () => {
    try {
        
        const imagesSql = { text: 'SELECT * FROM posts' };
    const result = await pool.query(imagesSql);
    return result.rows;
    }catch (error) {
        console.log('Error al obtener las imágenes 😒😒: ', error.message)
        throw error;
    }
};


// post
export const postImages = async (titulo, img, descripcion, likes) => {
    const sql =
        "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [titulo, img, descripcion, likes];

    try {
        const result = await pool.query(sql, values);
        return result.rows[0];
    } catch (error) {
        console.log('Error al publicar la imagen😒😒: ', error.message);
        throw error;
    }
};

// // post
// export const postImages = async () => {
//     const sql =
//         "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *";
//     const values = [titulo, img, descripcion, likes];

//     try {
//         const result = await pool.query(sql, values);
//         return result.rows[0];
//     } catch (error) {
//         console.log('Error al publicar la imagen😒😒: ', error.message);
//         throw error;
//     }
// };
