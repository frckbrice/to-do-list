//* bind html objects

const submit = document.querySelector(".add-task-btn");
const listOfTasks = document.querySelector(".list-of-tasks");
const searchFilter = document.querySelector(".search-input");

//* add events
submit.addEventListener("click", addTask);
listOfTasks.addEventListener("click", removeBtn);
// listOfTasks.addEventListener("click", strikeTextFn);
searchFilter.addEventListener("keyup", searchFilterFn);

//* function : add task */
function addTask() {
  // get input text from user
  const inputText = document
    .querySelector(".input-text")
    .value.toString()
    .trim();
  if (inputText) {
    //create li item (task)
    const li = document.createElement("li");
    li.className = "li-task";
    // li.appendChild(document.createTextNode(inputText));

    // create a p tag
    const ParagraphTag = document.createElement("p");
    ParagraphTag.className = "for-strike";
    ParagraphTag.textContent = inputText;
    ParagraphTag.style.color = "Blue";
    ParagraphTag.style.userSelect = "none";

    //create delete button1
    const deleteButton = document.createElement("button");
    deleteButton.style.cursor = "pointer";
    deleteButton.appendChild(document.createTextNode("X"));
    deleteButton.className = "delete-btn btn delete";

    //create i tag for icon
    const iIcon = document.createElement("i");
    iIcon.className = "fa fa-check";

    //create container for buttons
    const divIcons = document.createElement("div");
    divIcons.className = "icons";

    //add the two buttons to container
    divIcons.appendChild(deleteButton);

    //add p tag to li
    li.appendChild(ParagraphTag);

    // add all to li
    li.appendChild(divIcons);

    //add li to the end of list of tasks
    listOfTasks.appendChild(li);

    // add all to li
    li.appendChild(divIcons);
    const strikeButton = document.createElement("button");
    strikeButton.style.cursor = "pointer";
    strikeButton.className = "strikeBtn delete-btn";
    //add i tag to button2
    strikeButton.appendChild(iIcon);
    divIcons.appendChild(strikeButton);
    //* function to strike text
    strikeButton.addEventListener("click", () => {
      const text = ParagraphTag.textContent;
      console.log(text);
      if (confirm("Are you done with this task?")) {
        ParagraphTag.innerHTML = `<del>${text}</del>`;
      }
    });

    const iUndobtn = document.createElement("i");
    iUndobtn.className = "fa fa-undo";
    const undoButton = document.createElement("button");
    undoButton.style.cursor = "pointer";
    undoButton.className = "undo-btn delete-btn";
    undoButton.appendChild(iUndobtn);
    divIcons.appendChild(undoButton);
    //*function to unstrike a text
    undoButton.addEventListener("click", () => {
      ParagraphTag.innerHTML = ParagraphTag.textContent;
    });

    // freeInputText();
    document.querySelector(".input-text").value = "";

    // To call functions
    // strikeTextFn(e);
    toSaveData();
  }
}

//* function :  remove task */
function removeBtn(e) {
  const deleteBtn = e.target;
  if (deleteBtn.classList.contains("delete")) {
    if (confirm("Are you sure you want to delete this task?")) {
      const li = deleteBtn.parentElement.parentElement;
      listOfTasks.removeChild(li);
    }
  }
}

//* function : seach for a task in in the list of tasks */
function searchFilterFn(e) {
  const textForSearch = e.target.value.toLowerCase();
  const tasksToRemove = document.getElementsByTagName("li");
  Array.from(tasksToRemove).forEach((task) => {
    const taskItemChild = task.firstChild.textContent;
    if (taskItemChild.toLocaleLowerCase().indexOf(textForSearch) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}

//*funtion to store/saveguade list of task(s) tasks added in the list */
function toSaveData() {
  const ulTasks = document.querySelector(".list-of-tasks");
  localStorage.setItem("datum", ulTasks.innerHTML);
}

//* localStorage.removeItem("datum");

//* function to show stored datum */
function showDatum() {
  const ulTasks = document.querySelector(".list-of-tasks");
  ulTasks.innerHTML = localStorage.getItem("datum");
}
showDatum();
