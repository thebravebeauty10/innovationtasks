<!DOCTYPE html>
<html>
<body>

<h3>Task Manager</h3>

<input id="taskInput" placeholder="Enter task">
<button onclick="addTask()">Add</button>
<ul id="taskList"></ul>

<script>
  let tasks = [];

  function addTask() {
    let task = document.getElementById("taskInput").value;
    if (task) {
      tasks.push(task);
      document.getElementById("taskInput").value = "";
      showTasks();
    }
  }

  function showTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";
    for (let t of tasks) {
      let li = document.createElement("li");
      li.innerText = t;
      list.appendChild(li);
    }
  }
</script>

</body>
</html>