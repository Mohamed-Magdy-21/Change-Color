let btn = document.querySelector(".btn");
let divColor = document.querySelector(".color");

var color = ["red", "black", "green", "blue", "gray", "white"];
var i = 0


btn.onclick = function(){
    // logic
    divColor.style.backgroundColor = color[i];
    i++;

    if(i == 5){
        i = 0;
    }

}