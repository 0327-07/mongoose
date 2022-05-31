import express from "express";
import { getPosts } from "../controllers/postControllers.js";
const router = express.Router();

//GET request
//http:localhost:5000/posts
router.get("/", getPosts);

//POST request
router.post("/", createPosts)

export default router;
