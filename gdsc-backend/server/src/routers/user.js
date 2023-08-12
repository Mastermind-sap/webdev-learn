import { Router } from "express";
import {getAllUsers} from "../controllers/users/get.js";
import createUser from "../controllers/users/create.js";

const routes=Router();

routes.get("/",getAllUsers);
routes.post("/new",createUser);

export default routes;