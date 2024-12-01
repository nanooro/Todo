const taskInput = document.getElementById("taskAddInput");
let tasks = []; // Declare the tasks array globally
const list = document.getElementById("list");
function reset() {
  tasks = []; // Reset the tasks array
  const ul = document.getElementById("list");
  ul.innerHTML = "";
}
function logTasks() {
  console.log(tasks); // Log tasks array to console
}
let count = 0;
function update() {
  count += +1;
  console.log(count);
  // Get the value from the input field
  let taskInputValue = taskInput.value;
  console.log("User entered: " + taskInputValue);
  // Push the new task into the tasks array
  tasks.push(taskInputValue);
  console.log("Pushed value: " + taskInputValue);
  console.log("Array now contains: " + tasks);
  console.log("Array now contains: " + tasks.length + " items");

  // Create a new list item and append it to the list
  const list = document.getElementById("list");
  const liElement = document.createElement("li");
  liElement.textContent = tasks[tasks.length - 1]; // Display the most recent task
  list.appendChild(liElement);
  taskInput.value = "";

  list.document.createElement("svg");
  
}

// Add event listener to the input field to detect Enter key press
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    update(); // Trigger the update function when Enter is pressed
  }
});

function del() {
  const ul = document.getElementById("list");

  if (ul.lastElementChild) {
    // Check if there's a last child
    ul.lastElementChild.remove(); // Remove the last <li>
  }
}
