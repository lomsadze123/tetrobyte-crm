import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/", (_: Request, res: Response) => {
  res.send("Hello world");
});

app.listen(3001, () => console.log("Server listening on port 3001"));
