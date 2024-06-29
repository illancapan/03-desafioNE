import { Router } from "express";
import { getImages, postImages } from "../models/images.models.js";

const router = Router();

router.get("/posts", getImages);
router.post("/posts", postImages);

export default router;