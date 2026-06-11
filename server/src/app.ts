import express from "express";
import catsRoutes from "./routes/cats.route.ts";
import AIRouter from "./routes/ai.route.ts";
import aiRecommend from "./routes/aiRecommend.route.ts";
import McpRouter from "./routes/mcp.route.ts";
const app = express();
app.use(express.json());

app.get("/get", (req, res) => {
  res.status(200).json({
    message: "this is working....",
    sucess: true,
  });
});

app.use("/api/cats", catsRoutes);
app.use("/api/ai", AIRouter);
app.use("/api/recommend", aiRecommend);
app.use("/api/mcp", McpRouter);

export default app;
