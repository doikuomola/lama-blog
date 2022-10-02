import express from 'express';
import userCtrl from '../controllers/users.js';

const router = express.Router();

router.get('/', userCtrl.getAllUsers);

export default router;
