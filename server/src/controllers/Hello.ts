import { Router } from "express";

const helloRouter = Router();

helloRouter.get("/", (req, res) => {
    res.status(200).send("Bonjour !");
});

export default helloRouter;