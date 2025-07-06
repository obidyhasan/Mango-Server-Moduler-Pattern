import { Router } from "express";
import userRoute from "../user/user.route";

const routers = Router();
routers.use("/user", userRoute);

export default routers;
