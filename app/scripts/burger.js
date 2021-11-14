import {SummaryList} from "./summary-list.js";
import {GraphicVizualization} from "./graph.js";

let summary = new SummaryList();
let graph = new GraphicVizualization();

function Burger(ingredients = [], price, size, meatType, bunType) {
    this.ingredients = ingredients;
    this.price = price;

    this.selectSize = function(size){
        this.size = size;
        console.log("Size: " + size);
        return size;
    };

    this.selectBunType = function(bunType){
        this.bunType = bunType;
        this.ingredients.name.filter("buntop-bright");
        return bunType;
    };


    this.selectMeatType = function(meatType){
        this.meatType = meatType;
        console.log("Meat type: " + meatType);
        return meatType;
    };

    /*
        This function is adding new ingredient from 
        Ingrdient Factory to Burger ingridient list
    */
    this.addIngredient = function (ingredient, index) {
        ingredients.splice(index,0,ingredient);
        this.updatePrice();
        //summary.updateSummaryList(ingredient);
        graph.clearImage();
        graph.updateImage();
    };

    /*
        This function is removing ingredient from 
        Burger ingridient list by specified id
    */
    this.removeIngredient = function (id) {
        for (var i = 0; i < ingredients.length; i++) {
            if (ingredients[i].name == id) {
                ingredients.splice(i, 1);
                summary.removeIngredientsFromSummaryList(i);
                graph.removeImage(id);
                console.log("Ingredeint deleted:  " + id);
                break;
            }
        }
        this.updatePrice();
    };

    this.replace

    this.clearIngredientsList = function(){
        for (var i = 0; i < ingredients.length; i++) {
                summary.removeIngredientsFromSummaryList(0);
                console.log("Pętla for:" + ingredients[i].name)
                graph.clearImage();
                graph.updateImage();
        }
        this.ingredients.splice(0,ingredients.length);
        this.updatePrice();
    }

    this.updatePrice = function () {
        price = 0;
        for (var i = 0; i < ingredients.length; i++) {
            price += ingredients[i].price;
        }
        console.log("Burger price: " + price)

        summary.updatePriceInSummaryList(price);
    };
}

export { Burger};