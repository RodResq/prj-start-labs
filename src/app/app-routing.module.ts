import { AuthComponent } from './auth/auth.component';
import { RecipeResolverService } from './recipes/recipe-resolver.service';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


const appRoutes: Routes = [
    { path: '', redirectTo: 'recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent },
        { path: ':id', component: RecipeDetailComponent, resolve: [ RecipeResolverService ] },
        { path: ':id/edit', component: RecipeEditComponent, resolve: [ RecipeResolverService ] },
    ] },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'auth', component: AuthComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRountingModule {

}