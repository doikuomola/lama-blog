import express from 'express';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import usersRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';

const app = express();
dotenv.config();
app.use(express.json());

app.use('/api/posts', postRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
