import { Router } from "express";
import { getAllPost } from "../controllers/posts.controllers.js";

const router = Router();

router.get("/posts", getAllPost);

export default router;
