// getting HTML elements
const nava = document.querySelector("nava"),
      toggleBtn = nava.querySelector(".toggle-btn");

  toggleBtn.addEventListener("click" , () =>{
    nava.classList.toggle("open");
    nava.classList.toggle("close");
  });
  var button = document.getElementById('.toggle-btn');
button.style.display = 'none';

// js code to make draggable nav
function onDrag({movementY}) { //movementY gets mouse vertical value
  const navaStyle = window.getComputedStyle(nava), //getting all css style of nav
        navaTop = parseInt(navaStyle.top), // getting nav top value & convert it into string
        navHeight = parseInt(navaStyle.height), // getting nav height value & convert it into string
        windHeight = window.innerHeight; // getting window height

  nava.style.top = navaTop > 0 ? `${navaTop + movementY}px` : "1px";
  if(navaTop > windHeight - navaHeight){
    nava.style.top = `${windHeight - navHeight}px`;
    nava.classList.toggle("close");
  }
}

//this function will call when user click mouse's button and  move mouse on nav
nava.addEventListener("mousedown", () =>{
  nava.addEventListener("mousemove", onDrag);
});

//these function will call when user relase mouse button and leave mouse from nav
nava.addEventListener("mouseup", () =>{
  nava.removeEventListener("mousemove", onDrag);
});
nava.addEventListener("mouseleave", () =>{
  nava.removeEventListener("mousemove", onDrag);
});
