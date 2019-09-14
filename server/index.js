import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import commentsRoutes from "./routes/commentsRoutes";
const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));
app.use("/comments", commentsRoutes);

// mongoose.set("debug", true);
// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost/checkpoint2");

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
