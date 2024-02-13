while(true){
   x = prompt("Type number greater than or equal to 100", undefined);
   if(x >= 100) break;
}
alert(x);


function isPrime(n){
   for(let i=2; i<=Math.sqrt(n); i++)
      if(n % i == 0) return false;

   return true;
}
n = prompt("Type n : ", undefined);
l = []
for(let i=2; i<=n; i++){
   if(isPrime(i))
      alert(i);
}