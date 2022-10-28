import { Request, Response } from "express";
import Photo from "../models/Rick";
import path from "path";
import fs from "fs-extra";

export async function createCharacter(req: Request, res: Response): Promise<Response> {
	//nos muestra lo que hay en body
	console.log(req.body)

	//nos muestra que tipo de dato es
	const {nameCharacter , nameUser, description } = req.body;
	const newPhoto = {
		nameCharacter: nameCharacter,
		nameUser: nameUser,
		description: description,
		imagePath: req.file.path
	}
	// console.log(req.file.path)

	const photo = new Photo(newPhoto);
	await photo.save()
	console.log(photo);
	return res.json({
		message: "Character succesfully saved on computer using POST",
		photo
	})
}



export async function getCharacters(req: Request, res: Response): Promise<Response> {
	const photo = await Photo.find()
	console.log("save GET")
	return res.json({
		message: "send Characters",
		photo
	})
}
export async function getCharacter(req: Request, res: Response): Promise<Response> {
	const { id } = req.params;
	//destructuring
	const photo = await Photo.findById(id)
	// const photo = await Photo.findById(req.params.id)
	// console.log(req.params.id)
	return res.json({
		message: "selected character width ID",
		photo
	})
}
export async function deleteCharacter(req: Request, res: Response): Promise<Response> {
	const { id } = req.params;
	const photo = await Photo.findByIdAndRemove(id)
		if(photo){
		   await fs.unlink(path.resolve(photo.imagePath))
		}
		return res.json({
		message: "delete Photo",
		photo
	})
}
export async function updateCharacter(req: Request, res: Response): Promise<Response> {
	const { id } = req.params;
	const { nameUser, description}= req.body
	const updatePhoto=await Photo.findByIdAndUpdate(id,{
			nameUser,
			description
		},{new:true})
		return res.json({
		message: "Successfully Updated",
		updatePhoto
	})
}