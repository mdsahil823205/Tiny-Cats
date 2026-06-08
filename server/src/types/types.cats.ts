import type { Document } from "mongoose";

export interface ICat extends Document {
  name: string;
  breed: string;
  description: string;
  lifespan: number;
  kidsFriendly: boolean;
  appartmentFriendly: boolean;
  energyLevel: string;
  image: string;
  color: string;

  createdAt?: Date;
  updateAt?: Date;
}
