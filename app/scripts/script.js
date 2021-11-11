import { Ingredient, IngredientFactory } from "./ingredient.js";
import { Burger } from "./burger.js";

window.onload = function () {

    let burger = new Burger([], 0, "single");
    let ingredientFactory = new IngredientFactory();

    document.querySelectorAll(".ingredient-button").forEach(element => {
        element.addEventListener("click", event => {
                burger.addIngredient(ingredientFactory.create(element.id, parseFloat(element.getAttribute("price"))));
        })
    });
}