var btn = document.getElementById("btn");

function alert_me(){
    var text = document.getElementById("text");
    text.innerHTML = "<h1> Hello Rabbi Khanki Vai</h2>";
}
btn.addEventListener("click", alert_me);


var btn = document.getElementById("btn");

function jubayer(){
    var text = document.getElementById("name").value;
    var lst = document.getElementById("listing");

    var li = document.createElement("li");
    li.innerText = text;

    lst.appendChild(li)
}

btn.addEventListener("click", jubayer);


