const theButton = document.querySelectorAll('.tasks__field-container');
const theAddButton = document.querySelectorAll('.add-tasks__field-container');

theButton.forEach(button => {
    const fieldContainerItems = button.querySelector('.tasks__field-container--items');
    const fieldContainerItemEdit = button.querySelector('.tasks__field-container--item-edit');

    const renderFieldContainerItemEdit = () => {
        fieldContainerItemEdit.classList.remove('hidden');
        fieldContainerItemEdit.classList.remove('tasks__field-container--item-edit-disappear');
        fieldContainerItemEdit.classList.add('tasks__field-container--item-edit-appear');
    };

    const removeFieldContainerItemEdit = () => {
        fieldContainerItemEdit.classList.remove('tasks__field-container--item-edit-appear');
        fieldContainerItemEdit.classList.add('tasks__field-container--item-edit-disappear');
        setTimeout(() => {
            fieldContainerItemEdit.classList.add('hidden');
        }, 300);

        if (fieldContainerItems.classList.contains('tasks__field-container--items-appear')) {
            fieldContainerItems.classList.remove('tasks__field-container--items-appear');
        }
        fieldContainerItems.classList.add('tasks__field-container--items-disappear');
        setTimeout(() => {
            fieldContainerItems.classList.add('hidden');
        }, 300);
    };

    button.addEventListener('mouseover', renderFieldContainerItemEdit);
    button.addEventListener('mouseleave', removeFieldContainerItemEdit);
});

theAddButton.forEach(button => {
    const fieldContainerItemEdit = button.querySelector('.add-tasks__field-container--item-vector');

    const renderFieldContainerItemEdit = () => {
        fieldContainerItemEdit.classList.remove('hidden');
        fieldContainerItemEdit.classList.remove('add-tasks__field-container--item-vector-disappear');
        fieldContainerItemEdit.classList.add('add-tasks__field-container--item-vector-appear');
    };

    const removeFieldContainerItemEdit = () => {
        fieldContainerItemEdit.classList.remove('add-tasks__field-container--item-vector-appear');
        fieldContainerItemEdit.classList.add('add-tasks__field-container--item-vector-disappear');
        setTimeout(() => {
            fieldContainerItemEdit.classList.add('hidden');
        }, 300);
    };

    button.addEventListener('mouseover', renderFieldContainerItemEdit);
    button.addEventListener('mouseleave', removeFieldContainerItemEdit);
});


// Array to store tasks
let tasks = [];

// Function to render tasks
function renderTasks() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    tasks.forEach((task, index) => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => toggleTask(index));

        const textInput = document.createElement('input');
        textInput.type = 'text';
        textInput.value = task.text;
        textInput.addEventListener('change', (event) => updateTaskText(index, event.target.value));

        const deleteButton = document.createElement('button');
        deleteButton.innerText = '❌';
        deleteButton.addEventListener('click', () => deleteTask(index));

        todoItem.appendChild(checkbox);
        todoItem.appendChild(textInput);
        todoItem.appendChild(deleteButton);

        todoList.appendChild(todoItem);
    });
}

// Function to add a new task
function addTask() {
    const newTaskInput = document.getElementById('new-task');
    const newText = newTaskInput.value.trim();
    if (newText !== '') {
        tasks.push({ text: newText, completed: false });
        newTaskInput.value = '';
        renderTasks();
    }
}

// Function to toggle task completion status
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Function to update task text
function updateTaskText(index, newText) {
    tasks[index].text = newText;
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Initial rendering
renderTasks();

