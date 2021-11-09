function Ingredient(name, price){
    this.name = name;
    this.price = price;
}

function IngredientFactory() {
    this.create = function (name, price){
        console.log("Created " + name + " cost: " + price);
        return new Ingredient(name, price);
    };
}

export {Ingredient, IngredientFactory};