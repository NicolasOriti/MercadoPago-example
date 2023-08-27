import express from 'express';
import morgan from 'morgan';
import paymentRoutes from './routes/payment.routes.js';
import path from 'path';
import { configBody } from './config.js';

const app = express();

app.use(morgan('dev'));

app.use(paymentRoutes);

app.use(express.static(path.resolve('src/public')));

app.listen(configBody.PORT);
console.log('Server on port', configBody.PORT);
