import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';

import { AppComponent } from './app.component';
import { DiretivasLabsComponent } from './diretivas-labs/diretivas-labs.component';
import { HeaderComponent } from './header/header.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless-directive/unless.directive';
import { CardhoverDirective } from './card-hover/cardhover.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DiretivasLabsComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    CardhoverDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
