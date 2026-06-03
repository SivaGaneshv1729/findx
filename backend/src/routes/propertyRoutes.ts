import { Router } from 'express';
import { getProperties, createProperty, getPublicProperties } from '../controllers/propertyController';

const router = Router();

// Public route
router.get('/public', getPublicProperties);

// Admin/Agent routes
router.get('/', getProperties);
router.post('/', createProperty);

export default router;
