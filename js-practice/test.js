let a = 5;
let b = 10;
let c = 25;

console.log(a+b+c);

var names = ["jubayer", "shakil", "junayed", 15, 20, 30];
console.log(names);
names.push(25);
console.log(names);
names.push("rabby");
console.log(names);

names.splice(3, 0, "rabby");
console.log(names);
names.splice(8, 1, "imran");
console.log(names);
names.splice(8, 1);
console.log(names);

names.pop();
console.log(names);

k = names.indexOf("junayed");
console.log(k);

var names2 = ["jubayer", "shakil", "junayed", 15, 20, 30]
var n = names2.indexOf("shakil");
console.log(n);

 
var list = [10, 20, 64, 195, 26, 198, 45, 63, 85, 104, 67, 52, 40, 60];
list.sort();
console.log(list);
list.sort(function(a, b){return (a - b)});
console.log(list);

var names = "jubayer";
console.log(`my name is ${names}`);

var text = "   Biden is one of the Greatest Khankir Pola";
var k = text.split(" ");
console.log(k);
var t = text.trim();
console.log(t);

var sub = text.substring(0, 5);
console.log(sub);

let s = text.substring(5, );
console.log(s);

console.log(t.toUpperCase());
console.log(t.toLowerCase());


let username = ["jony", 'jubayer', "mahmud"];
username[2] = "shakil";
console.log(username);

details = {name : "rabby", roll : "15", age : "16"};


console.log(details["roll"]);

roll = details["name"];
console.log(roll);

var year = 2020;
if( (year%4==0 && year%100 !=0) || year%400 == 0 ){
    console.log("leap year");
}
else{
    console.log("Not leap year");
}
var x = 0;
for(x; x<10; x=x+1){
    console.log(x);
}

