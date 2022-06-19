import Event from "../models/Events";

import eventBody from "../interfaces/eventCreate";
import UpdateTickets from "./updateTicketQuantity";

interface FindEvent {
    event_id: number;
}

export default interface EventInterface {
    create(data:eventBody): Promise<Event>;
    findByName(name:string): Promise<Event|undefined>;
    findAllById(event:FindEvent[]): Promise<Event[]>;
    updateQuantity(event:UpdateTickets[]): Promise<Event[]>;
}