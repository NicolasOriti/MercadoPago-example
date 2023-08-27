import { Router } from 'express';
import { createOrder, receiveWebhook } from '../controllers/payment.controller.js';

const router = Router();

router.post('/create-order', createOrder);

router.get('/success', (req, res) => {
  res.send('Success');
});

router.get('/pending', (req, res) => {
  res.send('pending');
});

router.get('/failure', (req, res) => {
  res.send('failure');
});

router.post('/webhook', receiveWebhook);

export default router;
