import express from "express";
import {
  createCatController,
  getAllCatsController,
  getCatByIdController,
  recommendCatController,
  searchCatServiceController,
} from "../controller/cats.controller.ts";

const router = express.Router();

router.post("/create", createCatController);
router.get("/", getAllCatsController);
router.get("/:id", getCatByIdController);
router.get("/search/name", searchCatServiceController);
router.post("/recommended",recommendCatController);

export default router;
