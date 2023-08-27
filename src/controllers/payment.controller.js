import mercadopago from 'mercadopago';
import { configBody } from '../config.js';

export const createOrder = async (req, res) => {
  mercadopago.configure({
    access_token: configBody.MERCADOPAGO_API_KEY,
  });

  const result = await mercadopago.preferences.create({
    items: [
      {
        title: 'Laptop Lenovo',
        unit_price: 500,
        currency_id: 'ARS',
        quantity: 1,
      },
    ],
    back_urls: {
      success: `${configBody.HOST}/success`,
      pending: `${configBody.HOST}/pending`,
      failure: `${configBody.HOST}/failure`,
    },
    notification_url: 'https://c684-2803-9800-b8c1-8043-4c0a-9bb2-27f-db4c.ngrok-free.app/webhook',
  });

  console.log(result);

  res.send(result.body);
};

export const receiveWebhook = async (req, res) => {
  const payment = req.query;

  try {
    if (payment.type === 'payment') {
      const data = await mercadopago.payment.findById(payment['data.id']);
      console.log(data);
    }
    res.sendStatus(204);
  } catch (error) {
    return res.sendStatus(500).json({ error: error.message });
  }
};
