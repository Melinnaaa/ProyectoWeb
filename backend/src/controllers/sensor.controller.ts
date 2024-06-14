import { Request, Response } from 'express';

export const handleSensorData = (req: Request, res: Response) => {
  const sensorData = req.body;
  console.log('Datos de sensores recibidos:', sensorData);
  res.json({ status: 'success', data: sensorData });
};
