import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as logger from 'morgan';
import { AppDataSource } from './db';
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from 'swagger-jsdoc';

import userRoutes from './routes/usersRoute';

AppDataSource
.initialize()
.then(()=>{
    console.log("Data source has been initialized!!")
})
.catch((err)=>{
    console.log("Error during Data Source initialization:",err)
})

export const app = express();

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Library API',
            version: '1.0.0'
        }
    },
    apis: ['app.js']
}

const swaggerDocs = swaggerDocument(swaggerOptions);

app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocs));

app.use('/user', userRoutes);
app.use('/',(req,res)=> res.send('API of app Events Commerce'));

