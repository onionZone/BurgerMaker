function Burger(name, price, ingredients = [], size){
    this.name = name;
    this.price = price;
    this.ingredients = ingredients;
    this.size = size;

    this.setName = function(name){
        this.name = name;
    }

    this.getName = function(){
        return this.name;
    }

    
    this.addIngredient = function(ingredient){
        this.ingredients.push(ingredient);
        console.log("Dodano " + ingredient.name);
        var table = document.getElementById("summary-table");
        var tr = table.insertRow();
        var tc1 = tr.insertCell();
        var tc2 = tr.insertCell();
        tc1.innerHTML = ingredient.name;
        tc2.innerHTML = ingredient.price + " $";
    };

    this.removeIngredient = function(id){
        for(var i = 0; i < ingredients.length; i++) {
            if(ingredients[i].name == id) {
                ingredients.splice(i, 1);
                break;
            }
        }
    };

    this.getIngredientByName = function(){
        for(var i = 0; i < ingredients.length; i++) {
            if(ingredients[i].name == id) {
                break;
            }
            return ingredients[i].name;
        }
    };

    this.showIngredients = function(){
        let log = "Ingredients: ";
        for(var i=0; i<ingredients.length; i++){
            log += ingredients[i].name + ", ";
        }
        console.log(log);
    };

    this.calculatePrice = function(){
        price = 0;
        for(var i=0; i<ingredients.length; i++){
            price += ingredients[i].price;
        }

        console.log("Burger price: " + price)
        var priceText = document.getElementById("summary-value");
        priceText.innerHTML = "Burger price: " + price + " $";
    };
}

export{Burger};