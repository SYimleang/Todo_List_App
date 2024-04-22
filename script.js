const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addTask = () => {
  try {
    // Input value checks
    if (inputBox.value === "") {
      throw new Error("You must type something!");
    } else {
      createTask(inputBox.value);
      saveData();
    }
    // Reset the input value
    inputBox.value = "";
  } catch (error) {
    alert(error.message);
  }
};

// Create Task
const createTask = (value) => {
  const li = document.createElement("li");
  li.innerHTML = value;
  listContainer.appendChild(li);
  const span = document.createElement("span");
  span.innerHTML = "\u00d7";
  li.appendChild(span);
};

// Handle the clicked item
const handleItemClick = (e) => {
  try {
    // If click on the task will mark as completed
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
    // If click on the cross sign wil delete the task
    else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
    saveData();
  } catch (error) {
    console.error(error);
  }
};

listContainer.addEventListener("click", handleItemClick);

// Save all task inside the List Container in the local storage
const saveData = () => {
  try {
    localStorage.setItem("data", listContainer.innerHTML);
  } catch (error) {
    console.error(error);
  }
};

// Fetch the data from the local storage
const showTask = () => {
  try {
    const savedData = localStorage.getItem("data");
    if (savedData !== null) {
      listContainer.innerHTML = savedData;
    }
  } catch (error) {
    console.error(error);
  }
};

showTask();
