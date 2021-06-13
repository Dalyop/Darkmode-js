function darkMode() {
    var element = document.body;
    var nav = document.querySelector(".bodie");
    var toggleDarkMode = document.getElementById("darkModeToggle")

    element.classList.toggle("darkmode");
    nav.classList.toggle("darkmode");
    
    
    if(toggleDarkMode.innerHTML === `Dark`) {
        toggleDarkMode.innerHTML = `Light`;
    }
    else {
        toggleDarkMode.innerHTML =  `Dark`;
    }

    console.log(element);
}