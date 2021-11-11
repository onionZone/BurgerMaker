function SummaryList(){
    this.addIngredientsToSummaryList = function(ingredient){
        var table = document.getElementById("summary-table");
        var row = table.insertRow(-1);
        var cellName = row.insertCell(0);
        var cellPrice = row.insertCell(1);
        var cellRemove = row.insertCell(2);
        var removeButton = document.createElement("button");
        cellRemove.appendChild(removeButton);
        removeButton.setAttribute("class", "remove-button");

        cellName.innerHTML = ingredient.name;
        cellPrice.innerHTML = ingredient.price + " $";
        cellRemove.appendChild(removeButton);
        removeButton.innerHTML = "X"
        removeButton.setAttribute("onclick", )
    };

    this.removeIngredientsFromSummaryList = function(){
        var table = document.getElementById("summary-table")
        
    };
    
    this.updatePriceInSummaryList = function(price){
        var priceText = document.getElementById("summary-value");
        priceText.innerHTML = "Burger price: " + price + " $";
    };
}

export {SummaryList};