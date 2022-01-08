let collection = document.getElementById("collection");
let code = document.getElementById("code");
let fileName;
let index = 1;

let fetching = document.getElementById("fetching");
fetching.onclick = function(){            
    code.innerHTML = "";
    for(let i = 1; i <= 898; i++){
        collection = document.getElementById("collection");
        fileName = i.toString().padStart(3, "0");
        let source = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${fileName}.png`;
        
        let image = document.createElement("img");
        image.setAttribute("src", source);
        collection.appendChild(image);          
        collection.setAttribute ("class", "bg-warning d-flex justify-content-evenly flex-wrap");
    }
}

let reset = document.getElementById("reset");
reset.onclick = function(){
    collection.innerHTML = "";
    code.innerHTML = "";
}
    
let add = document.getElementById("add");
add.onclick = function(){
    code.innerHTML = "";
    fileName = index.toString().padStart(3, "0");
    let source = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${fileName}.png`;
    let image = document.createElement("img");
    image.setAttribute("src", source)
    collection.appendChild(image);
    index++;
}

let remove = document.getElementById("remove");
remove.onclick = function(){
    if(collection.lastChild != null){
        collection.removeChild(collection.lastChild);
        index--;
    }
}