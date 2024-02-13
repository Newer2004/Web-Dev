// basic
console.log("Assalamualeikum!")
// window.alert("KBTU")

// variable
let age = 18;
var name = "Zhanserik";
const ok = true;
console.log(age);
console.log(name);
console.log(ok);

// change html file
document.getElementById("p1").innerHTML = "Hello " + name;
document.getElementById("p2").innerHTML = "You are " + age;
document.getElementById("p3").innerHTML = "Are you stupid ? - " + ok;


// typeOfVariables
console.log(typeof(20));
console.log(typeof("Ansar"));
console.log(typeof(2.5)); //not double, float! just number
console.log({name : "Zhanserik", "age" : "18"})

// write
document.write("Mukhammed\n")
document.write("Ibrahim\n")
document.write("Salihat")

// undefined
var temp;
console.log(temp);