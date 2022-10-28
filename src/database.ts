import {connect} from "mongoose";

export async function startConnection(){

	await connect( "mongodb://localhost/rickaandmorty",{
        useNewUrlParser: true,
        useFindAndModify: false,
		useUnifiedTopology: true

    }) 
    console.log( "Database is connected in your computer now wolf!");
}