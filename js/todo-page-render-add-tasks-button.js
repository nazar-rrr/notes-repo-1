const tasksAddButton = document.querySelector('.add-tasks__field-container');
const tasksAddButtonItem = document.querySelector('.add-tasks__field-container--item-vector');

const renderTasksAddButtonItem = () => {
    tasksAddButtonItem.classList.remove('hidden');
    tasksAddButtonItem.classList.remove('add-tasks__field-container--item-vector-disappear');
    tasksAddButtonItem.classList.add('add-tasks__field-container--item-vector-appear');
}

const removeTasksAddButtonItem = () => {
    tasksAddButtonItem.classList.remove('add-tasks__field-container--item-vector-appear');
    tasksAddButtonItem.classList.add('add-tasks__field-container--item-vector-disappear');
    setTimeout(() => {
        tasksAddButtonItem.classList.add('hidden');
    }, 300);
}

tasksAddButton.addEventListener('mouseover', renderTasksAddButtonItem);
tasksAddButton.addEventListener('mouseleave', removeTasksAddButtonItem);
