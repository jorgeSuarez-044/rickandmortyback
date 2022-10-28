import { Router } from "express";
import {createCharacter, getCharacters,getCharacter, deleteCharacter, updateCharacter} from "../controllers/morty.controller";
import multer from "../libs/multer";
const router = Router();

router.route("/characters")
	  .post(multer.single("image"),createCharacter)
      .get(getCharacters)
router.route("/characters/:id")
		.get(getCharacter)
		.delete(deleteCharacter)
		.put(updateCharacter)
export default router; 