import { Ingredient, IngredientFactory } from "./ingredient.js";
import { Burger } from "./burger.js";

window.onload = function () {

    let burger = new Burger("Cheesburger", 0, []);
    let ingredientFactory = new IngredientFactory();

    document.querySelectorAll(".ingredient-button").forEach(element => {
        element.addEventListener("click", event => {
            if(true/*!(burger.getIngredientByName() === "Bread")*/){
                burger.addIngredient(ingredientFactory.create(element.id, parseFloat(element.getAttribute("price"))));
            } else {
                console.log("This ingredient is already in Your burger");
            }
            burger.calculatePrice();
            burger.showIngredients();
        })
    })
}