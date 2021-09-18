import express from 'express';
import * as bodyParser from 'body-parser';
import customers from './data/customer.json'
import * as RestController from './controller/RestController';

const app = express();
app.use(bodyParser.json({
    limit: '50 mb',
    verify(req: any, res, buf, encoding) {
        req.rawBody = buf;
    }
}));

app.get('/', (req, res) => res.send('Hello world'));

app.get('/orders', (req, res) => res.send(RestController.getOrders()));

export {app};