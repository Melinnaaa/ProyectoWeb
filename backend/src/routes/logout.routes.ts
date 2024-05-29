import { Router } from 'express';
import { logout } from '../controllers/logout.controller';

const router = Router();

router.post('/', logout);

export default router;
