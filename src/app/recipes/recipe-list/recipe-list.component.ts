import { Subscription } from 'rxjs';
import { RecipeService } from './../recipe.service';
import { EventEmitter, OnDestroy } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from './../recipe.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  @Output() recipeEmit = new EventEmitter<Recipe>(); 
  subscription: Subscription;
  
  recipes: Recipe[] = [];

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.recipeService.recipeChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    )
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSelectRecipeEl(recipe: Recipe) {
    this.recipeEmit.emit(recipe);
  }

  onClickNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
