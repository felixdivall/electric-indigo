// Define an array to store our to-do list items
var todoList = [];

// Function to add an item to the to-do list
function addTodoItem(item) {
  todoList.push(item);
  console.log("Item added: " + item);
}

// Function to display the to-do list
function displayTodoList() {
  console.log("To-do list:");
  for (var i = 0; i < todoList.length; i++) {
    console.log(i + 1 + ". " + todoList[i]);
  }
}

// Function to delete an item from the to-do list
function deleteTodoItem(index) {
  todoList.splice(index - 1, 1);
  console.log("Item deleted at index " + index);
}

// Test our functions by adding and displaying some items, and then deleting one
addTodoItem("Install Electric Indigo");
addTodoItem("Do that thing you nearly forgot, but remembered now that you read this.");
addTodoItem("Provide feedback to Felix (Please)");
addTodoItem("Enjoy it!");
displayTodoList();
deleteTodoItem(2);
displayTodoList();
