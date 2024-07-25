// Script that lets you toggle between Dark and Light Mode
let curr = "Dark";
//-----------------------------------------------------------------------------------------//
const btn = document.querySelector("#modeBtn"); // selecting the button taht toggles mode
const rbtn = document.querySelector("#resetBtn");
const body = document.querySelector("body"); // selecting body
const box = document.querySelectorAll(".box");
body.classList.add(curr); // Default Class
box.forEach(box => box.classList.add(curr));
btn.classList.add((curr));
rbtn.classList.add((curr));
btn.innerText = "Mode: " + curr; // Default mode text
//-----------------------------------------------------------------------------------------//
const modes = (mode) => { // Function to change modes
  body.classList.remove(curr); // removing the current class
  body.classList.add(mode); // adding the class corresponding to the mode [Light <--> Dark]
  box.forEach(box => {
    box.classList.remove(curr);
    box.classList.add(mode);
  })
  btn.classList.remove(curr);
  btn.classList.add(mode);
  rbtn.classList.remove(curr);
  rbtn.classList.add(mode);
  btn.innerText = "Mode: " + mode; // Toggle button text
  curr = mode;
} 
//-----------------------------------------------------------------------------------------//
const changeMode = () => { // On click trigger
  if (curr === "Dark") { //Checking the current mode
    modes("Light"); // calling the mode changer
  } else {
    modes("Dark"); // Calling the mode changer
  }
}
btn.addEventListener("click", changeMode); // when the event is triggered
//-----------------------------------------------------------------------------------------//
