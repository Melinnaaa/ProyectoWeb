import {Router} from 'express';
import {getUsers, getUser, deleteUser, putUser} from '../controllers/users.controller';
import { verifyToken } from '../middlewares/auth.middleware';
import { verifySession } from '../middlewares/session.middleware';
import { verifyRole } from '../middlewares/role.middleware';

const router = Router();

router.get('/', verifySession,verifyToken, verifyRole(1), getUsers)
router.get('/:id', verifySession, verifyToken, verifyRole(1), getUser)
router.delete('/:id', verifySession, verifyToken, verifyRole(1), deleteUser)
router.put('/:id', verifySession, verifyToken, verifyRole(1), putUser)

export default router;