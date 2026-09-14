function addTask() {
    const newTask = document.createElement('li')
    const tasklist = document.getElementById('tasklist')
    const input = document.getElementById('inputTask')

    newTask.textContent = input.value
    tasklist.appendChild(newTask)

    input.value = "";

    deleteTask(newTask)
}

function deleteTask(newTask) {
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "Delete"
    newTask.appendChild(deleteBtn)

    deleteBtn.onclick = function () {
        newTask.remove()
    }
}