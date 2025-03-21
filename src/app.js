import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN ,
    credentials: true
}));


app.use(cookieParser()) ;
app.use(express.json()) ;

import authRouter from "./routes/auth.route.js";
app.use("/auth", authRouter);

import postRouter from "./routes/posts.route.js";
app.use("/posts", postRouter);

export default app;