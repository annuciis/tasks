let taskList = document.getElementById("task-list");

function addTask() {
  let task = document.getElementById("task").value;
  let priority = document.getElementById("priority").value;
  let date = document.getElementById("deadline").value;

  const selectedDate = new Date(deadline);
  const currentDate = new Date();

  if (task == "" || date == "") {
    alert("Please fill all fields");
  } else if (selectedDate <= currentDate) {
    alert("Please select an upcoming date for the deadline.");
  } else {
    const newDiv = document.createElement("div");
    newDiv.classList.add("task");
    newDiv.innerHTML = `
    <p>${task} <p/>
    <p>${priority} </p>
    <p> ${date} </p>
    <button class="mark-done">Mark Done</button>
    `;
    taskList.appendChild(newDiv);
  }
}

taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("mark-done")) {
    e.target.parentElement.remove();
  }
});
