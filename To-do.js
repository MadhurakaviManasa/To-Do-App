var userInput = document.getElementById("task");
var userTasks = document.getElementById("tasklist");
var addButton = document.getElementById("add");
var clearButton = document.getElementById("clear"); 

addButton.addEventListener("click", addFunction);

// Function to add the task after clicking the add button
function addFunction(){
    var task = userInput.value;
    //checking if the user input is not empty
    if (task.trim()){
        var newItem = document.createElement("li");
        var taskText = document.createTextNode(task);
        newItem.appendChild(taskText);
        userInput.value = "";
        userTasks.appendChild(newItem);
    }
    else{
        alert("Input cannot be empty. Please enter a task before submitting!");
    }

clearButton.addEventListener("click", clearFunction);
// Function to clear the tasks after clicking clear button
function clearFunction(){
    userTasks.innerHTML = "";
}

// Adding "Done" option to the task list to remove the task

var removeButton = document.createElement("button");
removeButton.innerHTML = "Done";
removeButton.className = "remove";
removeButton.addEventListener("click", removeFunction);

function removeFunction(e){
        // get the parent list item to remove
        var taskItem = e.target.parentElement;
        userTasks.removeChild(taskItem);
}
newItem.appendChild(removeButton);
userTasks.appendChild(newItem);
}