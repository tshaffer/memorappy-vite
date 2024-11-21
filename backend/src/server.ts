import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import healthRoutes from './routes/health';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', healthRoutes); // Add the health routes under /api

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
