//Header
const h1 = document.createElement("h1");
h1.innerText = "Navigation";
//Unordered list
const unorderedList = document.createElement("ul");
const listItemOne = document.createElement("li");
const listItemTwo = document.createElement("li");
const listItemThree = document.createElement("li");
//Add Items to container
const container = document.getElementById("container");

container.append(h1);
container.append(unorderedList);
unorderedList.append(listItemOne, listItemTwo, listItemThree);
listItemOne.innerText = "Home";
listItemTwo.innerText = "Store";
listItemThree.innerText = "Contact";
//Create button
const button = document.createElement("button");

button.innerText = "Click Me";
container.append(button);

button.addEventListener("click", () => {
  button.classList.toggle("background");
});
