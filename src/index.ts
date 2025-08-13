import express from "express";
import cors from "cors";
import routers from "./app/routers/indexRouters";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", routers);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
