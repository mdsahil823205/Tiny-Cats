import mongoose from "mongoose";
import type { ICat } from "../types/types.cats.ts";

const CatSchema = new mongoose.Schema<ICat>(
  {
    name: {
      type: String,
      required: true,
    },
    breed: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    lifespan: {
      type: Number,
      default: 1,
    },
    kidsFriendly: {
      type: Boolean,
      default: true,
    },
    appartmentFriendly: {
      type: Boolean,
      default: true,
    },
    energyLevel: {
      type: String,
      required: true,
    },
    color: String,
    image: String,
  },
  { timestamps: true },
);

const catModel = mongoose.model("catModel", CatSchema);
export default catModel;
