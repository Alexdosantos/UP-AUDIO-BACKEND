import { Router } from "express";
import trascribeRouter from "./trascribeRouter/trascribeRouter";

const router = Router();
router.use("/transcribe", trascribeRouter);

export default router;
