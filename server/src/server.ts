import app from "./app.ts";
import dotenv from "dotenv";
import ConnectDB from "./config/connectDB.ts";
dotenv.config();
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
ConnectDB(); 
