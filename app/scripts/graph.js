import{burger} from "./script.js";

function GraphicVizualization(){

    this.updateImage = function (){
        burger.ingredients.forEach(element => {
            var content = document.getElementById("content");
            var image = document.createElement("img");
            image.setAttribute("id", element.name + "-image");
            image.src = "resources/" + element.name +".svg"
            content.appendChild(image);
        });
    };

    this.clearImage = function () {
        var content = document.getElementById("content");
        content.innerHTML ="";
    };
}

export{GraphicVizualization};