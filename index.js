// import values from html

const submit = document.querySelector(".submit");
const listOfTasks = document.querySelector(".list-of-tasks");
const searchFilter = document.querySelector('.search-input');

// add events
submit.addEventListener("click", addTask);
listOfTasks.addEventListener("click", removeBtn);
searchFilter.addEventListener("keyup", searchFilterFn);


// call of the functions
function addTask() {
  newAddTask();
}

function removeBtn() {
  newRemoveBtn();
}

function searchFilterFn() {
  newsearchFilter();
}

// function : add task
function newAddTask(){

// get input text from user
const inputText = document.querySelector(".input-text").value;

//create li item (task)
const li = document.createElement("li");
li.className = "li-task";
li.appendChild(document.createTextNode(inputText));

//create delete button1
const deleteButton = document.createElement("button");
deleteButton.style.cursor = 'pointer'
deleteButton.appendChild(document.createTextNode("X"));
deleteButton.className = "delete-btn btn";

//create delete button2
const deleteButton2 = document.createElement("button");
deleteButton2.style.cursor = 'pointer'
deleteButton2.appendChild(document.createTextNode(""));
deleteButton2.className = "delete-btn";

//create i tag for icon
const iIcon = document.createElement("i");
iIcon.appendChild(document.createTextNode(""));
iIcon.className = "fa fa-check";

//add i tag to button2
deleteButton2.appendChild(iIcon);

//create container for buttons
const divIcons = document.createElement('div');
divIcons.className = "icons";

//add the two buttons to container
divIcons.appendChild(deleteButton);
divIcons.appendChild(deleteButton2);

// add all to li
li.appendChild(divIcons);

//add li to the end of list of tasks
listOfTasks.appendChild(li);
}


// function :  remove task
function newRemoveBtn(e){
  // to target the true element to delete
  const deleteBtn = document.querySelector(".btn");
  console.log(deleteBtn.classList);
  if (deleteBtn.classList.contains("delete")) {
    if (confirm("Are you sure you want to delete this task?")) {

      //to target the parent of the element to delete
      const li = deleteBtn.parentElement.parentElement;

      //delete the element from it's parent
      listOfTasks.removeChild(li);
    }
  }
}


// function : seach for a task in in the list of tasks
function newsearchFilter(events){

  //target the filter element
  const searchFilter = document.querySelector('.search-input')
  let textForSearch = searchFilter.value.toLowerCase();
  console.log(textForSearch)
  const tasksToRemove = document.getElementsByTagName('li');
  Array.from(tasksToRemove).forEach((task) => {
    console.log(task);
    let taskItemChild = task.firstChild.textContent;
    console.log(taskItemChild);
    if(taskItemChild.toLocaleLowerCase().indexOf(textForSearch)!=-1){
      task.style.display = 'block';
    }else {
      task.style.display = 'none';
    }
  })
}



































