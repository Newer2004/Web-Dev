document.querySelector('#new-task-submit').onclick = function(){
   if(document.querySelector('#new-task-input').value.length == 0){
      alert('Fill out the task');
   }
   else{
      document.querySelector('#task-list').innerHTML += `
      <div class="task">
         <button class="completed" style="background-color:white;" onclick = completing(this)><i class="check" style = "color: white; display:flex; align-items: center; justify-content:center">✔</i></button>

         <div class="content">
            ${document.querySelector('#new-task-input').value}
         </div> 

         <button class="remove" onclick = removing(this)><i class="far fa-trash-alt"></i></button>
      </div>
      `;

      document.querySelector('#new-task-input').value = '';
      
   }
}

function removing(td){
   td.parentNode.remove()
}
function completing(btn){
   if(btn.parentNode.querySelector('.content').style.textDecoration == 'none'){
      btn.querySelector('.check').style.color = 'blue';
      btn.parentNode.querySelector('.content').style.textDecoration = 'line-through';
   }
   else{
      btn.querySelector('.check').style.color = 'white';
      btn.parentNode.querySelector('.content').style.textDecoration = 'none';
   }
}