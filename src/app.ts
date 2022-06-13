import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as logger from 'morgan';
import * as swagger from 'swagger-node-express';

export const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));


swagger.setAppHandler(app);