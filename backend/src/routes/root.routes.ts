import { Router } from 'express';
import { rootHandler } from '../controllers/root.controller';

const router = Router();

router.get('/', rootHandler);

export default router;