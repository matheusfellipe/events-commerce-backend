import { Router } from "express";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/usersController';

const router = Router();


/**
 * @swagger
 * /users:
 * get:
 *  description: Use to request all users
 *  responses:
 *    '200':
 *      description: Aa successful response
 */
router.get("/users", getUsers);

router.get("/users/:id", getUser);

router.post("/users", createUser);

router.put("/users/:id", updateUser);

router.delete("/users/:id", deleteUser);

export default router;