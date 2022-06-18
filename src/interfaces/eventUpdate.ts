import Event from "../models/Events";
import eventBody from "./eventCreate";

export default interface UpdateEvents {
    event_id: number;
    tickets: number;
}