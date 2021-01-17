var formEl = document.querySelector("#task-form")
var tasksToDoEl = document.querySelector("#tasks-to-do");
var taskFormHandler =function(event){
  console.log(event);
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  //console.dir(taskNameInput);
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
   //Exception : Enter empty value not accepted
   if (!taskNameInput || !taskTypeInput){
     alert("you need to fill out the task form");
     return false;
   }
   //formEl.reset();
  //create data from createTaskEl
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
  };
  //console.dir(listItemEl);
  //HTMLFontElement.reset();
};

var createTaskEl = function(taskDataObj){
 
  //create List items
  var listItemEl = document.createElement("li");
  listItemEl.className ="task-item";
  // create div to hold  task info and add to the list items
  var taskinfoEl = document.createElement("div")
  taskinfoEl.className ="task-info";
  //give it a class name
  taskinfoEl.innerHTML ="<h3 class='task-name'>"+ taskDataObj.name +"</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild (taskinfoEl);
 // listItemEl.textContent = taskNameInput;
  tasksToDoEl.appendChild(listItemEl);
  console.dir(listItemEl);

}

 formEl.addEventListener("submit",taskFormHandler);
