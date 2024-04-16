import { Elysia } from "elysia";
import route from "./route";
import { ConnectDatabase } from "./config/connectDatabase";

const app = new Elysia();
route(app);
app.listen(3000);
ConnectDatabase.connect();
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
