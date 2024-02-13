let user = {
   name : "John",
   surname : "Smith",
}
alert(user.name + ' ' + user.surname);
user.name = "Pete";
delete user.name;
alert(user.name + ' ' + user.surname);

function isEmpty(object){
   for(key in object){
      return false;
   }
   return true;
}
let schedule = {};
alert(isEmpty(schedule));
schedule["8:30"] = "get up";
alert(isEmpty(schedule)); 


function getSum(obj){
   let sum = 0;
   for(key in obj){
      sum += obj[key];
   }
   return sum;
}
let salaries = {
   John: 100,
   Ann: 160,
   Pete: 130
 }
alert(getSum(salaries));

// object is reference data type, while string is primitive data type
