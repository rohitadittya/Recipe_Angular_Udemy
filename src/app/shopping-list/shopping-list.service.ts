import { Ingredient } from '../shared/ingredient.model';

import { Subject } from 'rxjs/Subject';

export class ShoppingListService{
ingredientsChanged=new Subject<Ingredient[]>();
startedEditing=new Subject<number>(); 
    private ingredients:Ingredient[]=[
        new Ingredient("apple",50),
        new Ingredient("banana",12),
      ];

      getIngredients(){
          return this.ingredients.slice();
      }

      getIngredient(index:number){
        return this.ingredients[index];
      }

      addIngredient(ingredient:Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientsChanged.next(this.ingredients.slice());
      }

      addIngredients(ingredients:Ingredient[]){ //this method receives array /list of ingredients 
    //     for(let ingredient of ingredients){  //this for can be used but instead we use "spread" operator-->
    //         this.addIngredient(ingredient);  //Syntax for spread opr-->(...ur array)
    //    }

    this.ingredients.push(...ingredients);//spread operator is used, (...)is spread opr
    this.ingredientsChanged.next(this.ingredients.slice());
    //spread opr helps to turn array of elements into list of elemnts..
    //as we receive ingredients which is array of elemnts, 
    //push cant handle array of elemnts so it needs to be turned to list of elemnts.
    //so we use spread operator
      }

      updateIngredient( index : number ,newIngredient: Ingredient){
        this.ingredients[index]=newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
      }


      deleteIngredient(index:number){
        this.ingredients.splice(index,1);//splice is to delete the value 
        this.ingredientsChanged.next(this.ingredients.slice());
      }

    }