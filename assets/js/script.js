var formEl = document.querySelector("#task-form")
var tasksToDoEl = document.querySelector("#tasks-to-do");
var taskFormHandler =function(event){
  console.log(event);
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  //console.dir(taskNameInput);
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
  //create List items
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
  };
  console.dir(listItemEl);
};

var createTaskEl = function(taskDataObj){
 
  //create List items
  var listItemEl = document.createElement("li");
  listItemEl.className ="task-item";
  // create div to hold  task info and add to the list items
  var taskinfoEl = document.createElement("div")
  taskinfoEl.className ="task-info";
  //give it a class name
  taskinfoEl.innerHTML ="<h3 class='task-name'>"+ taskNameInput +"</h3><span class='task-type'>" + taskTypeInput + "</span>";
  listItemEl.appendChild (taskinfoEl);
 // listItemEl.textContent = taskNameInput;
  tasksToDoEl.appendChild(listItemEl);
  console.dir(listItemEl);

}

 formEl.addEventListener("submit",taskFormHandler);
