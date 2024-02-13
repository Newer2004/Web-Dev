if ("0") {
   alert('Hello');
}

let question = prompt("What is the “official” name of JavaScript?", "Type here");
if (question == 'ECMAScript'){
   alert('Right!');
}  else{
   alert('You don’t know? ECMAScript!');
}

let num = prompt('Type number', undefined);
let message = (num < 0) ? -1 : (num == 0) ? 0 : 1;
alert(message);