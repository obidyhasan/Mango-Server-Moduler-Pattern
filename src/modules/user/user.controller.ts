import { Request, Response } from "express";
import User from "./user.model";

export const registerUser = async (req: Request, res: Response) => {
  const payload = req.body;
  const user = new User(payload);
  const data = await user.save();

  res.send({
    success: true,
    message: "User Register Successfully",
    data,
  });
};
