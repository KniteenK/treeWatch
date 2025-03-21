import { Router } from "express";

const router = new Router();

import { createPost, getAllPosts, createComment, getCommentsByPost } from "../controllers/posts.controller.js" ;
import { upload } from "../middlewares/multer.middleware.js";
router.route ("/createPost").post (upload.fields([
    {
        name: "image",
        maxCount: 1
    }
]) , createPost) ;
router.route ("/getAllPosts").get (getAllPosts) ;
router.route ("/createComment").post (createComment) ;
router.route ("/getCommentsByPost/:postId").get (getCommentsByPost) ;

export default router ;