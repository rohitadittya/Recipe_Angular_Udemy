import { Ingredient } from '../shared/ingredient.model';

export class Recipe{
public name:String;
public description:String;
public imagePath:String;
public ingredients:Ingredient[];

constructor(name :String , desc: String ,imagepath :String,ingredients:Ingredient[]){
    this.name=name;
    this.description=desc;
    this.imagePath=imagepath;
    this.ingredients=ingredients;
}
}