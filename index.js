const tabOne = document.querySelector(".react");
const tabTwo = document.querySelector(".vue");
const tabThree = document.querySelector(".angular");
const body = document.body;
const item = document.querySelectorAll(".item");
const icon = document.querySelector(".big-icon");

function setColors(activeTab, bgColor, iconClass, infoColor, activeClass) {
    body.style.backgroundColor = bgColor;
    icon.innerHTML = `<i class="${iconClass}"></i>`;
    for (let i = 0; i < item.length; i++) {
        item[i].style.color = infoColor;
    }
    tabOne.classList.remove("tabOne", "tabTwo", "tabThree");
    tabTwo.classList.remove("tabOne", "tabTwo", "tabThree");
    tabThree.classList.remove("tabOne", "tabTwo", "tabThree");
    activeTab.classList.add(activeClass);
}

tabOne.addEventListener("click", () => {
    setColors(tabOne, "#00d8ff", "fab fa-react", "#00d8ff", "tabOne");
});

tabTwo.addEventListener("click", () => {
    setColors(tabTwo, "#42b883", "fab fa-vuejs", "#42b883", "tabTwo");
});

tabThree.addEventListener("click", () => {
    setColors(tabThree, "#b52e31", "fab fa-angular", "#b52e31", "tabThree");
});

setColors(tabOne, "#00d8ff", "fab fa-react", "#00d8ff", "tabOne");
