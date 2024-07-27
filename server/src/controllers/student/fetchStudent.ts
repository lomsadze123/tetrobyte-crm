import { Request, Response } from "express";

const fetchStudent = (req: Request, res: Response) => {
  res.send("Hello world");
};

export default fetchStudent;
