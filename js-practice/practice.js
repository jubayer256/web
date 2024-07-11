/* var btn = document.getElementById("btn");

function practice(){
    var lst = document.getElementById('list');
    var li = document.createElement("li");
    var text = document.getElementById("name").value;
    li.innerText = text;
    lst.appendChild(li);
    document.getElementById("name").value = "";
}
 btn.addEventListener("click", practice);
 */

var btn = document.getElementById("add")

function add_row(){
    var name = document.getElementById("name").value;
    var roll = document.getElementById("roll").value;

    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    
    td1.innerText = name;
    td2.innerText = roll;

    tr.appendChild(td1);
    tr.appendChild(td2);

    var table = document.getElementById("students");
    table.appendChild(tr);

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";

}

btn.addEventListener("click", add_row)