import { RecipeService } from './../recipes/recipe.service';
import { Recipe } from './../recipes/recipe.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators/map'
import { tap } from 'rxjs/operators';


@Injectable({ providedIn: 'any' })
export class DataStorageService {

    constructor(
        private http: HttpClient,
        private recipeService: RecipeService) {}

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        return this.http.put('https://ng-course-recipe-book-680f0-default-rtdb.firebaseio.com/rescipes.json', recipes).subscribe(response => {
            console.log(response);
            
        })
    }

    fetchRecipes() {
        return this.http.get<Recipe[]>('https://ng-course-recipe-book-680f0-default-rtdb.firebaseio.com/rescipes.json')
            .pipe(map(recipes => {
                return recipes.map(recipe => {
                   return {
                        ...recipe, 
                        ingredients: recipe.ingredients ? recipe.ingredients: [] 
                    }
                });
            }), 
            tap(recipes => {
                this.recipeService.setRecipes(recipes);
            }));
    }
}