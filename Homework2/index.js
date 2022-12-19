
 

let array = [5, 15, 45];
let myList = document.getElementById("myList");
myList.innerHTML = "";
myList.innerHTML = array

let sum = array.reduce((accumulator, value) => {
  return accumulator + value;
}, 0);

console.log(sum);

// I googled how to sum the numbers from the array because the functions and the loops and the return things are not very clear to me
