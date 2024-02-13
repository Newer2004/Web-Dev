let email;

document.getElementById("myButton").onclick = function(){
   email = document.getElementById("myInput").value;

   console.log(email);
   document.getElementById("myLabel").innerHTML = "Hello " + email;
}

for(var i=0; i<10; i++){
   console.log("Number " + i);
}
console.log(i) // var is also global