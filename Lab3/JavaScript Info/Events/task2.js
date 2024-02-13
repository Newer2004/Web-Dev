const inner = document.getElementById("innerDiv");
const outer = document.getElementById("outerDiv");

inner.addEventListener("click", changeRed);
inner.addEventListener("click", changeRed);

function changeRed(){
   this.style.backgroundColor = "red";
}

/* ---  */

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => 
   button.addEventListener('click', function(){
      console.log('clicked!');
   }));
