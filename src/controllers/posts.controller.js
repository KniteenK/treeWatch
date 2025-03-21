import prisma from "../utils/prisma.js";

const createPost = async (req, res) => {
    try {
      const { title, content, image, authorId } = req.body;

        const user = await prisma.user.findUnique({ where: { id: authorId } });

        if (!user) {
            throw new Error("Unauthorized request");
        }

      const post = await prisma.post.create({
        data: { 
            title, 
            content, 
            image, 
            author : {connect: { id: user.id }} 
        },
      });
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ message: "Error creating post", error });
    }
  };
  
  const getAllPosts = async (req, res) => {
    try {
      const posts = await prisma.post.findMany({ include: { author: true, comments: true } });
      res.status(200).json(posts);
    } catch (error) {
        console.log(error.message);
      res.status(500).json({ message: "Error fetching posts", error });
    }
  };
  
  const createComment = async (req, res) => {
    try {
      const { content, postId, authorId } = req.body;
      const comment = await prisma.comment.create({
        data: { content, postId, authorId },
      });
      res.status(201).json(comment);
    } catch (error) {
      res.status(500).json({ message: "Error creating comment", error });
    }
  };
  
  const getCommentsByPost = async (req, res) => {
    try {
      const { postId } = req.params;
      const comments = await prisma.comment.findMany({ where: { postId }, include: { author: true } });
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json({ message: "Error fetching comments", error });
    }
  };
  
  export { createPost, getAllPosts, createComment, getCommentsByPost };
  