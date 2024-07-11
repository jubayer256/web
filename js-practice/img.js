var btn = document.querySelector(".btn");

function notun(){
    var image = document.querySelector(".image");
    image.classList.toggle("new-image");

    /* if(btn.innerHTML == "click more"){
        btn.innerHTML = "click less";
        btn.style.background = "red";
        btn.style.color = "white";
    }
    
    else{
        btn.innerHTML = "click more";
        btn.style.background = "green";
        btn.style.color = "orange";
    } */

    // if(image.innerHTML == "new image"){
    //     image.innerHTML = "image";
    // }
    // else{
    //     image.innerHTML = "new image";
    // }

}
btn.addEventListener("click", notun);