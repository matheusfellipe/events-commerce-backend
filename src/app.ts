import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as logger from 'morgan';
import { AppDataSource } from './db';
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from 'swagger-jsdoc';
import "reflect-metadata";

import userRoutes from './routes/usersRoute';
import eventRoutes from './routes/eventRoute';
import orderRoutes from './routes/orderRoute';

AppDataSource
.initialize()
.then(()=>{
    console.log("Data source has been initialized!!")
})
.catch((err)=>{
    console.log("Error during Data Source initialization:",err)
})



const swaggerOptions = {
    swaggerDefinition: {
        info: {
          version: "1.0.0",
          title: "Events Commerce API",
          description: "Events API Information",
         
        },
        servers: [
          {url:"http://localhost:3000",
      },
    ],
      },
      // ['.routes/*.ts']
      apis: ['./routes/*.ts'],
};


const specs = swaggerDocument(swaggerOptions);

export const app = express();


app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(specs));
// router.get('/api-docs',swaggerUi.setup(swaggerDocs))

app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/api', userRoutes);
app.use('/api', eventRoutes);
app.use('/api',orderRoutes);


