import express from 'express';
import * as bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json({
    limit: '50 mb',
    verify(req: any, res, buf, encoding) {
        req.rawBody = buf;
    }
}));

app.get('/', (req, res) => res.send('Hello world'));

export {app};