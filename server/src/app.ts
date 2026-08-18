import express from "express";
import { type Request, type Response } from "express";

const app = express();

app.get("/api/health", (req: Request, res: Response) => {
    res.json("status: ok");
})

export default app;