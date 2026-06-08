import catModel from "../models/cats.model.ts";
//create cats
export const createService = async (payload: object) => {
  return await catModel.create(payload);
};

// get all cats
export const getAllCatsService = async () => {
  return await catModel.find();
};

// get cat by id
export const getCatByIdService = async (id: unknown) => {
  return await catModel.findById(id);
};

//search cats service
export const searchCatService = async (query: string) => {
  return await catModel.find({
    $or: [
      {
        name: {
          $regex: query,
          $options: "i",
        },
      },
      {
        breed: {
          $regex: query,
          $options: "i",
        },
      },
    ],
  });
};

export const recommendService = async (
  kidsFriendly: boolean,
  appartmentFriendly: boolean,
) => {
  return await catModel.find({
    kidsFriendly,
    appartmentFriendly,
  });
};
