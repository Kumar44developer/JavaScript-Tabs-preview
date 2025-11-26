const tabOne = document.querySelector(".react");
const tabTwo = document.querySelector(".vue");
const tabThree = document.querySelector(".angular");
const body = document.body;
const item = document.querySelectorAll(".item");
const icon = document.querySelector(".big-icon");
const active = document.querySelector(".active")

function setColors(tab, bgColor, iconClass, infoColor) {
    body.style.backgroundColor = bgColor;
     icon.innerHTML = `<i class="${iconClass}"></i>`;
    for (let i = 0; i < item.length; i++) {
      item[i].style.color = infoColor;
    }
  }

tabOne.addEventListener("click",()=>{
    setColors(tabOne,"#00d8ff","fab fa-react","#00d8ff");
