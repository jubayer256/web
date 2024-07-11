var btn = document.querySelector("#top_btn"); // a tag ta call koira nilam

function visible(){
    if(window.scrollY > 400){
        btn.style.display = "block";
    }
    else{
        btn.style.display = "none";
    }
}

window.addEventListener("scroll", visible);
