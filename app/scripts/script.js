import { Ingredient, IngredientFactory } from "./ingredient.js";
import { Burger } from "./burger.js";

let ingredientFactory = new IngredientFactory();

let burger = new Burger([], 0, "", "", "");

window.onload = function () {

    var addFocus = function (name, focusedButton) {
        var buttons = document.querySelectorAll(name);
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }
        focusedButton.classList.add("active");
    }

    document.querySelectorAll(".size-button").forEach(element => {
        element.addEventListener("click", event => {
            burger.selectSize(element.id);
            switch (element.id) {
                case "single":
                    burger.clearIngredientsList();
                    burger.addIngredient(ingredientFactory.create("bunbottom-bright", 2), 0);
                    burger.addIngredient(ingredientFactory.create("meat-beef", 2), 0);
                    burger.addIngredient(ingredientFactory.create("buntop-bright", 2), 0);
                    break;

                case "double":
                    burger.clearIngredientsList();
                    burger.addIngredient(ingredientFactory.create("bunbottom-bright", 2), 0);
                    burger.addIngredient(ingredientFactory.create("meat-beef", 2), 0);
                    burger.addIngredient(ingredientFactory.create("bunbottom-bright", 2), 0);
                    burger.addIngredient(ingredientFactory.create("meat-beef", 2), 0);
                    burger.addIngredient(ingredientFactory.create("buntop-bright", 2), 0);
                    break;
            }
            addFocus(".size-button", element);
        })
    });

    document.querySelectorAll(".bun-type-button").forEach(element => {
        element.addEventListener("click", event => {
            burger.selectBunType(element.id);
            addFocus(".bun-type-button", element);
        })
    });

    document.querySelectorAll(".meat-type-button").forEach(element => {
        element.addEventListener("click", event => {
            burger.selectMeatType(element.id);
            addFocus(".meat-type-button", element);
        })
    });

    document.querySelectorAll(".ingredient-button").forEach(element => {
        element.addEventListener("click", event => {
            burger.addIngredient(ingredientFactory.create(element.id, parseFloat(element.getAttribute("price"))), 1);
        })
    });
}

export { burger };

