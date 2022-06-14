import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as logger from 'morgan';
import { AppDataSource } from './db';
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from 'swagger-jsdoc';

import userRoutes from './routes/users.route';


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
          version: "1.0.0",
          title: "Events Commerce API",
          description: "Events API Information",
          servers: ["http://localhost:3000"]
        }
      },
      // ['.routes/*.ts']
      apis: ['.routes/*.ts']
}


const swaggerDocs = swaggerDocument(swaggerOptions);

app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocs));
// router.get('/api-docs',swaggerUi.setup(swaggerDocs))


app.use('/api', userRoutes);


