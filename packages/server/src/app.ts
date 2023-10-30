import * as Express from "express";
import { SharedUtils } from "@proj/shared";
import * as Yargs from "yargs/index";
const app = Express.default();

app.post("/hello", (req: Express.Request, res: Express.Response) => {
  SharedUtils.print("Hello API 호출!");
  res.send("Hello!!");
});

app.listen("1234", () => {
  console.log(`
  ###################################
   Server is running on port: 1234!!
  ###################################

  `);
});
