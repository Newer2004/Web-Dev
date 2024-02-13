
const pressBtn = document.querySelector(".add");

pressBtn.addEventListener("click", createNewBox);

function createNewBox(){
   const box = document.createElement("li");

   box.classList.add("box");
   box.innerHTML = `
                  <button class="btn">click</button>
                  <span>Zhanserik</span>
                `;

   document.getElementById('container').appendChild(box);
};
