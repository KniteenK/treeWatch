import { Router } from "express";

const router = new Router();

import { createPost, getAllPosts, createComment, getCommentsByPost } from "../controllers/posts.controller.js" ;
router.route ("/createPost").post (createPost) ;
router.route ("/getAllPosts").get (getAllPosts) ;
router.route ("/createComment").post (createComment) ;
router.route ("/getCommentsByPost/:postId").get (getCommentsByPost) ;

export default router ;