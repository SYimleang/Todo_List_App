const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById("list-container");

const addTask =() => {
    // Input value checks
    if(inputBox.value === ''){
        alert("You must type something!");
    }
    else {
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    // Reset the input value
    inputBox.value = '';
    saveData();
}

// Check the clicked element
listContainer.addEventListener("click", function(e){
    // If click on the task will mark as completed
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    // If click on the cross sign wil delete the task
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Save all task inside the List Container in the local storage
const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Fetch the data from the local storage
const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();