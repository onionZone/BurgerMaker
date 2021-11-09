function Burger(name, price, ingredients = [], size){
    this.name = name;
    this.price = price;
    this.ingredients = ingredients;
    this.size = size;

    this.setName = function(size){

    }

    this.getName = function(name){
        return this.name;
    }

    
    this.addIngredient = function(ingredient){
        this.ingredients.push(ingredient);
        console.log("Dodano " + ingredient.name);
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
    };
}

export{Burger};