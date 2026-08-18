import express, {type Request, type Response} from "express";
import { getHealth } from "../controllers/health.controller.js";

const router = express.Router();

router.get("/health", getHealth);

export default router;