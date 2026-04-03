function addTask(){
   const taskInput = document.getElementById("taskInput");
   const taskList = document.getElementById("taskList");

   const task = taskInput.value;
   if(task.trim() === "")return;

   const li = document.createElement("li");
   li.innerText = task;


   const completeBtn = document.createElement("button");
   completeBtn.innerText = "✅";
   completeBtn.style.marginLeft = "5px";
   completeBtn.onclick = function(){
      li.classList.toggle("completed");
   }

   li.appendChild(completeBtn);



   const deletebtn = document.createElement("button");
   deletebtn.innerText = "❎";
   deletebtn.style.marginLeft = "5px";

   deletebtn.onclick = function(){
      li.remove();
   }

   li.appendChild(deletebtn);

   

   taskList.appendChild(li);

   console.log(li);
   console.log(task);

   taskInput.value = "";
   
}

function filterTasks(){
   // implement the filter functionality
}

// you have to implement the edit functionality