import { Router } from 'express';

const router = Router();

// Define the /api/health route
router.get('/health', (req, res) => {
    res.json({ message: 'Backend is healthy!' });
});

export default router;
