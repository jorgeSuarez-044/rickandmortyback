import {Schema, model, Document} from 'mongoose';

const schema = new Schema({
    nameCharacter :String,
    nameUser: String,
    description: String,
    imagePath: String
});
 interface ICharacter extends Document{ 
    nameCharacter :String,
    nameUser: string;
    description: string;
   imagePath:string;  
}
export default model<ICharacter>( "Character", schema);