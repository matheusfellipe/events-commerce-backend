import Order from "../models/Orders";

import CreateOrder from "./orderCreate";

export default interface orderInterface {
    create(data:CreateOrder):Promise<Order>;
    findById(order_id:number):Promise<Order|undefined>;
}