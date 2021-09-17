import express from 'express';
import * as bodyParser from 'body-parser';
import customers from './data/customer.json'

const app = express();
app.use(bodyParser.json({
    limit: '50 mb',
    verify(req: any, res, buf, encoding) {
        req.rawBody = buf;
    }
}));

const customerList = customers;

app.get('/', (req, res) => res.send('Hello world'));

app.get('/customers', (req, res) => res.send(customerList))

export {app};