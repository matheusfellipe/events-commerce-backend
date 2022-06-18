import User from "../models/Users";

interface Event {
event_id:number;
price?:number;
tickets:number;
}

export default interface OrderBody {
    user: User;
    event: Event[];
}