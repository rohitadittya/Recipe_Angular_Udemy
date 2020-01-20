import { Recipe } from './recipe.model';
import {  Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class RecipeService{
   recipesChanged=new Subject<Recipe[]>();
    private recipes:Recipe[] =[
        new Recipe(
        'Burger',
        'This is burger',
        'https://img.tutpad.com/tut/0/0/43/19-burger-flat-icon700.jpg?size=%3C700x&dpr=2',
        [
            new Ingredient('Bun',2),
            new Ingredient('Meat',1),
        ]),
        
        new Recipe(
        'Pizza',
        'This is pizza',
        'http://clipart-library.com/images/BTaEa5Ekc.jpg',
        [
            new Ingredient('Dough',3),
            new Ingredient('Tomato sauce',2),
        ]),
      ];

      constructor(private slService:ShoppingListService){}

      getRecipes(){
          return this.recipes.slice();//here slice is used to provide copy of abv array...
      }

      getRecipe(index:number){
          return this.recipes[index];
      }
      addIngredientsToShoppingList(ingredients:Ingredient[]){
          this.slService.addIngredients(ingredients);
      }
      addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }
      updateRecipe(index:number,newRecipe:Recipe){
        this.recipes[index]=newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }
      deleteRecipe(index:number){
          this.recipes.splice(index,1);
          this.recipesChanged.next(this.recipes.slice());
      }
      setRecipes(recipes:Recipe[]){
          this.recipes=recipes;
          this.recipesChanged.next(this.recipes.slice());
      }
}