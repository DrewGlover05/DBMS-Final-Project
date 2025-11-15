import { Request, Response } from "express";

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (email === "test@example.com" && password === "1234") {
    const token = "FAKE_TOKEN";
    res.json({ message: "Login successful", token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};
