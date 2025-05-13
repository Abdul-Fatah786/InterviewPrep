import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import userRoutes from './src/routes/userRoutes.js';

const PORT = process.env.PORT || 5000;

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);

app.listen(PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
);
