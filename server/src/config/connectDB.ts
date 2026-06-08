import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("database connected");
  } catch (error) {
    console.log(`this error come from ConnectDB ${error}`);
  }
};

export default ConnectDB;
