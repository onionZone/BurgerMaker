import {SummaryList} from "./summary-list.js";

function Burger(ingredients = [], price, type) {
    this.ingredients = ingredients;
    this.price = price;
    this.type = type;

    let summary = new SummaryList();
    /*
        This function is adding new ingredient from 
        Ingrdient Factory to Burger ingridient list
    */
    this.addIngredient = function (ingredient) {
        this.ingredients.push(ingredient);
        this.updatePrice();
        summary.addIngredientsToSummaryList(ingredient);
    };

    /*
        This function is removing ingredient from 
        Burger ingridient list by specified id
    */
    this.removeIngredient = function (id) {
        for (var i = 0; i < ingredients.length; i++) {
            if (ingredients[i].name == id) {
                ingredients.splice(i, 1);
                console.log("Usunięto element " + id);
                break;
            }
        }
        summary.removeIngredientsFromList(ingredient);
        this.updatePrice();
    };

    this.updatePrice = function () {
        price = 0;
        for (var i = 0; i < ingredients.length; i++) {
            price += ingredients[i].price;
        }
        console.log("Burger price: " + price)

        summary.updatePriceInSummaryList(price);
    };
}

export { Burger };