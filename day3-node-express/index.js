import express from 'express';
const app = express();

import userRoutes from './src/Routes/userRoutes.js';
import logger from './src/middleware/logger.js';
// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use('/api/users', userRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
