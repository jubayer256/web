var btn = document.querySelector(".btn");

function add(){
    var extra = document.querySelector(".extra");
    extra.classList.toggle("extra_visible");

    if(btn.innerHTML == "Read more"){
        btn.innerHTML = "Read less";
        btn.style.background = "red";
        btn.style.color = "white";
    }
    
    else{
        btn.innerHTML = "Read more";
        btn.style.background = "green";
        btn.style.color = "orange";
    }
}

btn.addEventListener("click", add);
