const renderTasksEditButtonItem = (event) => {
    if (event.target.matches('.tasks__item')) {
        const tasksEditButtonItem = event.target.querySelector('.tasks__item--edit');
        tasksEditButtonItem.classList.remove('hidden');
        tasksEditButtonItem.classList.remove('tasks__item--edit-disappear');
        tasksEditButtonItem.classList.add('tasks__item--edit-appear');
    }
}

const removeTasksEditButtonItem = (event) => {
    const tasksEditButtonItem = document.querySelectorAll('.tasks__item--edit');
    tasksEditButtonItem.forEach(buttonItem => {
        buttonItem.classList.remove('tasks__item--edit-appear');
        buttonItem.classList.add('tasks__item--edit-disappear');
        setTimeout(() => {
            buttonItem.classList.add('hidden');
        }, 300);
    })
}

document.addEventListener('mouseover', renderTasksEditButtonItem);
document.addEventListener('mouseleave', removeTasksEditButtonItem);