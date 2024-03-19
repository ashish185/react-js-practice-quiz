const el = document.createElement("div");
el.innerText = "Tab1";
const el2 = document.createElement("div");
el2.innerText = "Tab2";
const el3 = document.createElement("div");
el3.innerText = "Tab3";

const parentElement = document.getElementById("tabs");
const msgEl = document.createElement("p");
msgEl.innerText = "This is tab1";
document.body.appendChild(msgEl);


parentElement.appendChild(el);
parentElement.appendChild(el2);
parentElement.appendChild(el3);

parentElement.addEventListener("click", (e) => {
  //innerText returns the visible text contained in a node, while textContent returns the full
  //textContent is the only one available for text nodes:
  console.log(e.target.textContent); //clicked current tab content
  const pE = document.getElementsByTagName("p")["0"];
  console.log(e.currentTarget.innerText);
  if (e.target.textContent === 'Tab2') {
    pE.innerText = "This is Tab2";
  }
  else if (e.target.textContent === 'Tab3') {
    pE.innerText = "This is Tab3";
  }
  else if (e.target.textContent === 'Tab1'){
    pE.innerText = "This is Tab1";
  }
});