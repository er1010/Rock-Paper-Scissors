//console.log("hello! World!");
function getComputerChoice(item){
    return item[Math.floor(Math.random()*item.length)];
}
let item = ["rock", "sis", "paper"]
console.log(getComputerChoice(item))