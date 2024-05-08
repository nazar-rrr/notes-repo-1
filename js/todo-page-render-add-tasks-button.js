const tasksAddButton = document.querySelector('.add-tasks__item');
const tasksAddButtonItem = document.querySelector('.add-tasks__item--vector');

const renderVectorContainerItems = (element, action, className) => {
    element.classList[action](className);
};

const renderTasksAddButtonItem = () => {
    renderVectorContainerItems(tasksAddButtonItem, 'remove', 'hidden');
    renderVectorContainerItems(tasksAddButtonItem, 'remove', 'add-tasks__item--vector-disappear');
    renderVectorContainerItems(tasksAddButtonItem, 'add', 'add-tasks__item--vector-appear');
};

const removeTasksAddButtonItem = () => {
    renderVectorContainerItems(tasksAddButtonItem, 'remove', 'add-tasks__item--vector-appear');
    renderVectorContainerItems(tasksAddButtonItem, 'add', 'add-tasks__item--vector-disappear');
    setTimeout(() => {
        renderVectorContainerItems(tasksAddButtonItem, 'add', 'hidden');
    }, 300);
};

tasksAddButton.addEventListener('mouseover', renderTasksAddButtonItem);
tasksAddButton.addEventListener('mouseleave', removeTasksAddButtonItem);
