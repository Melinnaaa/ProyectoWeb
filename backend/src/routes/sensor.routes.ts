import { Router } from 'express';
import { handleSensorData } from '../controllers/sensor.controller';

const router = Router();

router.post('/', handleSensorData);

export default router;
