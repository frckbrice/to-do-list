// import values from html

const submit = document.querySelector(".submit");
const listOfTasks = document.querySelector(".list-of-tasks");

console.log(listOfTasks);
 

// add events
submit.addEventListener("click", addTask);




// function : add task
function newAddTask(){

const inputText = document.querySelector(".input-text").value;

const li = document.createElement("li");

li.className = "li-task";

li.appendChild(document.createTextNode(inputText));

const deleteButton = document.createElement("button");

deleteButton.appendChild(document.createTextNode("X"));

deleteButton.className = "delete -btn btn";

const iIcon = document.createElement("i");

iIcon.appendChild(document.createTextNode(""));

iIcon.className = "fa fa-check";

const divIcons = document.createElement('div');

divIcons.className = "icons";

divIcons.appendChild(deleteButton);
divIcons.appendChild(iIcon);

li.appendChild(divIcons);

listOfTasks.appendChild(li);
listOfTasks;
}

function addTask(){
  newAddTask();
}


// function :  remove task







// function : seach for a task





































