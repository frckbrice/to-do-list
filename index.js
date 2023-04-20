// import values from html

const submit = document.querySelector(".add-task-btn");
const listOfTasks = document.querySelector(".list-of-tasks");
const searchFilter = document.querySelector(".search-input");
const strikeText = document.querySelectorAll(".strike");

// add events
submit.addEventListener("click", addTask);
listOfTasks.addEventListener("click", removeBtn);
searchFilter.addEventListener("keyup", searchFilterFn);
Array.from(strikeText).forEach((item) => {
  item.addEventListener("click", strikeTextFn);
});

/* function : add task */
function addTask() {
  // get input text from user
  const inputText = document.querySelector(".input-text").value;

  //create li item (task)
  const li = document.createElement("li");
  li.className = "li-task";
  li.appendChild(document.createTextNode(inputText));

  //create delete button1
  const deleteButton = document.createElement("button");
  deleteButton.style.cursor = "pointer";
  deleteButton.appendChild(document.createTextNode("X"));
  deleteButton.className = "delete-btn btn";

  //create delete button2
  const deleteButton2 = document.createElement("button");
  deleteButton2.style.cursor = "pointer";
  deleteButton2.appendChild(document.createTextNode(""));
  deleteButton2.className = "delete-btn";

  //create i tag for icon
  const iIcon = document.createElement("i");
  iIcon.appendChild(document.createTextNode(""));
  iIcon.className = "fa fa-check";

  //add i tag to button2
  deleteButton2.appendChild(iIcon);

  //create container for buttons
  const divIcons = document.createElement("div");
  divIcons.className = "icons";

  //add the two buttons to container
  divIcons.appendChild(deleteButton);
  divIcons.appendChild(deleteButton2);

  // add all to li
  li.appendChild(divIcons);

  //add li to the end of list of tasks
  listOfTasks.appendChild(li);
}

/* function :  remove task */
function removeBtn(e) {
  // to target the true element to delete
  const deleteBtn = e.target;
  if (deleteBtn.classList.contains("delete")) {
    if (confirm("Are you sure you want to delete this task?")) {
      //to target the parent of the element to delete
      const li = deleteBtn.parentElement.parentElement;
      //delete the element from it's parent
      listOfTasks.removeChild(li);
    }
  }
}

// function to strike text from a task
function strikeTextFn(e) {
  console.log("within the strike fnt");
  const li = e.target.parentElement.parentElement.parentElement;
  console.log(li);
  console.log(li.firstChild.textContent);
  const textToStrike = li.firstChild.textContent;
  if (confirm("Are you done with this task ?")) {
    li.firstChild.innerHTML = textToStrike.strike();
    // li.innerHTML = textToStrike.strike();
    // console.log(textToStrike);
    // li.setAttribute('text-decoration', 'line-through');
    //textToStrike= `<del>${textToStrike}</del>`
  }
}

/* function : seach for a task in in the list of tasks */
function searchFilterFn(e) {
  //target the filter element
  // const searchFilter = document.querySelector('.search-input')
  // to convert input text to lowercase
  let textForSearch = e.target.value.toLowerCase();
  // target all the tasks to be remove
  const tasksToRemove = document.getElementsByTagName("li");
  // conert the result in array
  Array.from(tasksToRemove).forEach((task) => {
    // to get the content of all the tasks
    let taskItemChild = task.firstChild.textContent;
    // verify if the search text exist in the task content
    if (taskItemChild.toLocaleLowerCase().indexOf(textForSearch) != -1) {
      // if existence display
      task.style.display = "block";
    } else {
      // else hide
      task.style.display = "none";
    }
  });
}
