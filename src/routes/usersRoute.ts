import { Router } from "express";

export const routerUser = Router();

routerUser.get('/',(req,res)=>res.send('User service'))