function change_color(){
    var menu = document.querySelector(".menu");

    if(window.scrollY > 1200){
        menu.style.background = "blue";
    }
    else if(window.scrollY > 800){
        menu.style.background = "yellow";
    }
    else{
        menu.style.background = "cyan";
    }
}

window.addEventListener("scroll", change_color);

