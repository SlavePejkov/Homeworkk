let firstParent = document.body.getElementsByTagName('div')[0];
let headerOne =  firstParent.getElementsByTagName("h1")[0];
headerOne.innerText = "";
headerOne.innerText = "I changed the text";

let paragraphOne = headerOne.nextElementSibling;
paragraphOne.innerText = "";
paragraphOne.innerText = "This is changed too"


let secondParent = document.body.getElementsByTagName('div')[1];
let paragraphTwo =  secondParent.getElementsByTagName("p")[0];
paragraphTwo.innerText = "";
paragraphTwo.innerText = "Why not change this too";


let thirdParent = document.body.getElementsByTagName('div')[2];
let headerTwo = thirdParent.getElementsByTagName("h1")[0];
headerTwo.innerText = "";
headerTwo.innerText = "If we are changing the texts why not change this one too while we are at it";



let headerThree = headerTwo.nextElementSibling;
headerThree.innerText = "";
headerThree.innerText = "You guessed it, i will change it"