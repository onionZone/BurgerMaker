function Burger(ingredients = [], type) {
    this.ingredients = ingredients;
    this.type = type;
    this.observers = [];

    this.subscribe = function(observer){
        this.observers.push(observer);
    }

    this.unsubscribe = function(observer){

    }

    /*
        This function is adding new ingredient from 
        Ingrdient Factory to Burger ingridient list
    */
    this.addIngredient = function (ingredient) {
        this.ingredients.push(ingredient);
        this.observers.forEach(
            element => element.notify
        )
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
    };

    this.calculatePrice = function () {
        price = 0;
        for (var i = 0; i < ingredients.length; i++) {
            price += ingredients[i].price;
        }

        console.log("Burger price: " + price)
        var priceText = document.getElementById("summary-value");
        priceText.innerHTML = "Burger price: " + price + " $";
    };
}

export { Burger };