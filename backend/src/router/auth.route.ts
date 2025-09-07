import express, { type Router, type Request, type Response } from "express";

const authRouter: Router = express.Router();

// Register
authRouter.post("/register", (req: Request, res: Response) => {
  
});

// Login

export default authRouter;