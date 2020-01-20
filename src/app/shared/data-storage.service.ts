import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/Rx';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
    constructor(private http: Http,
        private recipeService: RecipeService,
        private authService:AuthService) { }

    storeRecipes() {
        const token=this.authService.getToken();
        return this.http.put('https://ng-recipe-book-359cc.firebaseio.com/recipes.json?auth='+token, this.recipeService.getRecipes());
    }

    getRecipes() {
        const token=this.authService.getToken();
        // this.http.get('https://ng-recipe-book-359cc.firebaseio.com/recipes.json')//this is without token passed in arg
        this.http.get('https://ng-recipe-book-359cc.firebaseio.com/recipes.json?auth='+token)//this is with token passed in arg
            .map(
                (response: Response) => {
                    const recipes: Recipe[] = response.json();
                    for (let recipe of recipes) {
                        if (!recipe['ingredients']) {
                            console.log(recipe);
                            recipe['ingredients'] = []
                        }
                    }
                    return recipes; //this returns to .subscribe
                }
            )
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                }
            );
    }

}