import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';


export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];
    ingredientsChanged = new Subject<Ingredient[]> ();

    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }
    /* Video 111.1 Using Services to Pushind Data from A to B
        In our getIngredients(), we get a copy oy our ingredients[],so the view do
        not change when some ingredient is added.
        To fix it, we creatre a new EvenEmitter propiety, and when ingridient is added, we
        emit that event ans subscribe on shopping-list component.
    */
    addIngredient(ingredient: Ingredient): void {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next( this.ingredients.slice() );
    }
    addIngredients(ing: Ingredient[]): void {
        /* ing.forEach(ingredient => {
            this.ingredients.push(ingredient);
        }); */
        this.ingredients.push(...ing);
        this.ingredientsChanged.next( this.ingredients.slice() );
    }
}
