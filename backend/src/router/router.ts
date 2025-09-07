import express, { type Router, type Request, type Response } from "express";
import authRouter from "./auth.route.js";
import postRouter from "./post.route.js";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Akineko API Success.");
});

// User Authentication Routes.
router.use("/auth", authRouter);

// Post Routes.
router.use("/posts", postRouter);

export default router;