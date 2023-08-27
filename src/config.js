import dotenv from 'dotenv';
dotenv.config();

export const configBody = {
  PORT: process.env.PORT || 3000,
  HOST: `${process.env.HOST}:${process.env.PORT}` || 'localhost',
  MERCADOPAGO_API_KEY: process.env.MERCADOPAGO_API_KEY,
};
