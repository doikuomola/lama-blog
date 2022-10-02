import express from 'express';
import authCtrl from '../controllers/auth.js';

const router = express.Router();

router.get('/', authCtrl.register);

export default router;
