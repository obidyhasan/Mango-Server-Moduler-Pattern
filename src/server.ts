import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config";
import routers from "./modules/routers";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routers);

app.get("/", (req, res) => {
  res.send({ status: "success", message: "Mango Server" });
});

const server = async () => {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("🔥 Connected to MongoDB");
    app.listen(config.port, () =>
      console.log(`✅ Mango Server is running on port ${config.port}`)
    );
  } catch (error) {
    console.log(`Server error ${server}`);
  }
};

server();
