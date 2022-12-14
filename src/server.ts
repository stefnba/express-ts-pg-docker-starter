import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { db } from './_db';

dotenv.config();

const app: Application = express();

const { APP_PORT } = process.env;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('trust proxy', true); // get real ip

app.get('/users', async (req: Request, res: Response) => {
    const users = await db.manyOrNone('SELECT * FROM users');
    res.json(users);
});

app.get('/', (req: Request, res: Response) => {
    res.send(
        `Hello World!<br/>This app is running on port ${APP_PORT} and your IP is ${req.ip}`
    );
});

app.listen(APP_PORT, () => {
    console.log(`Server is running on PORT ${APP_PORT}`);
});

export default app;
