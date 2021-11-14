import { burger } from "./script.js";

function SummaryList() {
    this.addIngredientsToSummaryList = function (ingredient) {
        var table = document.getElementById("summary-table");
        var row = table.insertRow(-1);
        var cellName = row.insertCell(0);
        var cellPrice = row.insertCell(1);
        var cellRemove = row.insertCell(2);
        var removeButton = document.createElement("button");
        cellRemove.appendChild(removeButton);
        removeButton.setAttribute("class", "remove-button");

        cellName.innerHTML = ingredient.name[0].toUpperCase() + ingredient.name.substring(1);
        cellName.setAttribute("name", ingredient.name)
        cellPrice.innerHTML = ingredient.price + " $";
        cellRemove.appendChild(removeButton);
        removeButton.innerHTML = "X"
        removeButton.addEventListener("click", function(){
            burger.removeIngredient(ingredient.name);
        });
    }

    this.removeIngredientsFromSummaryList = function (rowIndex) {
        var table = document.getElementById("summary-table");
        table.deleteRow(rowIndex);
    };

    this.updatePriceInSummaryList = function (price) {
        var priceText = document.getElementById("summary-value");
        if(price==0){
            priceText.style.visibility = "hidden";
        } else {        
            priceText.style.visibility = "visible";
            priceText.innerHTML = "Burger price: " + price + " $";
        }
    };
}

export { SummaryList };