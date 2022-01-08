let collection = document.getElementById("collection");
let fileName;
let code = document.getElementById("code");
let index = 1;

let fetching = document.getElementById("fetching");
fetching.addEventListener("click", function(){
    code.innerText = "";
    for(let i = 1; i <= 898; i++){
        fileName = i.toString().padStart(3, "0");
        let source = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${fileName}.png`;
        let img = document.createElement("img");
        img.setAttribute("src", source);
        collection.appendChild(img);
    }
});

let reset = document.getElementById("reset");
reset.addEventListener("click", function(){
    collection.innerHTML = "";
});

let add = document.getElementById("add");
add.addEventListener("click", function(){
    code.innerText = "";
    fileName = index.toString().padStart(3, "0");
    let source = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${fileName}.png`;
    let img = document.createElement("img");
    img.setAttribute("src", source);
    collection.appendChild(img);
    index++;
});

let remove = document.getElementById("remove");
remove.addEventListener("click", function(){
    if (collection.lastChild != null){
        collection.removeChild(collection.lastChild);
        index--;
    }
});