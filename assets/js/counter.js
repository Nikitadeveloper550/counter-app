 let counts = 0;

 const counter = document.querySelector(".counter");
 const addButton = document.querySelector(".add-button")

 addButton.addEventListener("click", () => {
     counts++;
     counter.textContent = counts;
 });


 let count = 0;
 let savedValues = [];

 const counterDisplay = document.querySelector('.counter-display');
 const addOneButton = document.querySelector('.add-onebutton');
 const saveButton = document.querySelector('.savebutton');
 const previousValues = document.querySelector('.previous-values');

 addOneButton.addEventListener('click', () => {
     count++;
     counterDisplay.textContent = count;
 });

 saveButton.addEventListener('click', () => {
     savedValues.push(count);
     previousValues.textContent = savedValues.join(', ');
 });