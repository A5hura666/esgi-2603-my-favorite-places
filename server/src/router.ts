import { Router } from "express";
import usersRouter from "./controllers/Users";
import addressesRouter from "./controllers/Addresses";
import helloRouter from "./controllers/Hello";

const apiRouter = Router();

apiRouter.use("/users", usersRouter);
apiRouter.use("/addresses", addressesRouter);

apiRouter.use("/hello", helloRouter);

export default apiRouter;
