import type { Request, Response } from "express";
import {
  createService,
  getAllCatsService,
  getCatByIdService,
  recommendService,
  searchCatService,
} from "../services/cat.service.ts";

export const createCatController = async (req: Request, res: Response) => {
  const result = await createService(req.body);
  return res.status(201).json({
    message: "cat created",
    data: result,
  });
};
export const getAllCatsController = async (req: Request, res: Response) => {
  const result = await getAllCatsService();
  return res.status(200).json({
    message: "all cats",
    data: result,
  });
};

export const getCatByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await getCatByIdService(id);
  return res.status(200).json({
    message: "cat by id",
    data: result,
  });
};

export const searchCatServiceController = async (req: Request, res: Response) => {
  const q = req.query.q as string;
  const result = await searchCatService(q);
  return res.status(200).json({
    message: "search cat by name or breed",
    data: result,
  });
};

export const recommendCatController = async (req: Request, res: Response) => {
  const { kidsFriendly, appartmentFriendly } = req.body;
  const result = await recommendService(
    kidsFriendly,
    appartmentFriendly,
  );
  return res.status(200).json({
    message: "recommended cats",
    data: result,
  });
};
