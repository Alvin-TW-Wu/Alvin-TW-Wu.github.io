let collection = document.getElementById("collection");
let fileName;
let index = 1;

function Fetch(){
    for(let i = 1; i <= 898; i++){
        collection = document.getElementById("collection");
        fileName = i.toString().padStart(3, "0");
        let source = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${fileName}.png`;
        
        let image = document.createElement("img");
        image.setAttribute("src", source);
        collection.appendChild(image);          
        collection.setAttribute("class", "bg-warning");
    }
}

function Reset(){
    collection.innerHTML = "";
}
    
function Add(){
    fileName = index.toString().padStart(3, "0");
    let source = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${fileName}.png`;
    let image = document.createElement("img");
    image.setAttribute("src", source)
    collection.appendChild(image);
    index++;
}

function Remove(){
    if(collection.lastChild != null){
        collection.removeChild(collection.lastChild);
        index--;
    }
}