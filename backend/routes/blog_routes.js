import express from "express";
import getAllBlogs, { getByUserId } from "../controllers/blog-controller";
import { addBlog, updateBlog, getById, deleteBlog } from "../controllers/blog-controller";

const blogRouter = express.Router();

blogRouter.get('/', getAllBlogs)
blogRouter.post('/add', addBlog)
blogRouter.put('/update/:id', updateBlog)
blogRouter.get('/:id', getById)
blogRouter.delete('/:id', deleteBlog)
blogRouter.get('/user/:id', getByUserId)
export default blogRouter;