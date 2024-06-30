import { Router } from "express";
import { getAllPost, postAllPost } from "../controllers/posts.controllers.js";

const router = Router();

router.get("/", getAllPost);

router.post("/", postAllPost);


export default router;
