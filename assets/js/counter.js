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
     count > 0 && savedValues.push(count);
     previousValues.textContent = savedValues.join(', ');
     count = 0;
     counterDisplay.textContent = count;

     //  if (count === 0) {
     //     alert("You can't save zero. Please add a value first.");
     //     return; 
     //   }

     //   previousValues.textContent = previousValues.textContent + ", " + count; 
     //   count = 0; 
     //   counterDisplay.textContent = count; 
 });