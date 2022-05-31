import express from "express";
//import { deletePost } from "../controllers/postController.js";
import { getPosts, deletePost, createPost } from "../controllers/postController.js";
const router = express.Router();

//GET request
//http:localhost:5000/posts/
router.get("/", getPosts);

//POST request
router.post("/", createPost)

//DELETE Request

router.delete("/:id", deletePost);

//UPDATE

router.patch("/:id")

export default router;
