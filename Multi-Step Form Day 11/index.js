
//for Enabling and Disabling Dark Mode
let icon = document.querySelector("#icon");
icon.onclick=function(){
    document.body.classList.toggle("darkMode")
    if (document.body.classList.contains("darkMode")){
        icon.src="sun-fill.svg";
    }
    else{
        icon.src="moon-fill.svg";
    }
}
