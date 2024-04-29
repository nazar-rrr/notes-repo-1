const tasksAddButton = document.querySelector('.add-tasks__item');
const tasksAddButtonItem = document.querySelector('.add-tasks__item--vector');

const renderTasksAddButtonItem = () => {
    tasksAddButtonItem.classList.remove('hidden');
    tasksAddButtonItem.classList.remove('add-tasks__item--vector-disappear');
    tasksAddButtonItem.classList.add('add-tasks__item--vector-appear');
}

const removeTasksAddButtonItem = () => {
    tasksAddButtonItem.classList.remove('add-tasks__item--vector-appear');
    tasksAddButtonItem.classList.add('add-tasks__item--vector-disappear');
    setTimeout(() => {
        tasksAddButtonItem.classList.add('hidden');
    }, 300);
}

tasksAddButton.addEventListener('mouseover', renderTasksAddButtonItem);
tasksAddButton.addEventListener('mouseleave', removeTasksAddButtonItem);
