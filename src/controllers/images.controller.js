import { getImages, postImages } from "../models/images.models.js";

export const getImagesController = async (req, res) => {
    try {
        const images = await getImages();
        res.status(200).json({ images: images });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const postImagesController = async (req, res) => {
    const { titulo, img, descripcion, likes } = req.body;
    try {
        await postImages(titulo, img, descripcion, likes);
        res.status(200).send("Imagen agregadad correctamente 🔥😊😊🔥");
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};
