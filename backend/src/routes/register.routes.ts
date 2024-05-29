import { Router } from 'express';
import {postUser} from '../controllers/register.controller';

const router = Router();

router.post('/', postUser);
export default router;
