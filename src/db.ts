import "reflect-metadata";
import { DataSource } from "typeorm";
import  User  from "./models/Users";
import Event from "./models/Events";
import Order from "./models/Orders";
import OrdersEvents from "./models/OrdersEvents";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "postgres",
    database: "events_commerce",
    synchronize: true,
    logging: false,
    entities: [User,Event,Order,OrdersEvents],
    migrations: [],
    subscribers: [],
})
