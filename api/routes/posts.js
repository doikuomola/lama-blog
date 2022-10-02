import express from 'express';
import postsCtrl from '../controllers/posts.js';

const router = express.Router();

router.get('/', postsCtrl.getAllPosts);

export default router;
