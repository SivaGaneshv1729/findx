import { Router } from 'express';
import { getUsers, createAgent } from '../controllers/userController';

const router = Router();

router.get('/', getUsers);
router.post('/agents', createAgent);

export default router;
