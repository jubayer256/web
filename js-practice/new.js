var btn = document.getElementById("btn");

function insert(){
    var lst =  document.getElementById("list");
    var li = document.createElement("li");
    var text = document.getElementById("name").value;
    li.innerHTML = "<b>" + text + "</b>";
    lst.appendChild(li);

    document.getElementById("name").value = "";
}

btn.addEventListener("click", insert);


var but_del = document.getElementById("btn-delete");

function remove(){
    var lst =  document.getElementById("list");
    var child = lst.children;
    lst.removeChild(child[0]);
}

but_del.addEventListener("click", remove);
