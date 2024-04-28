const renderTasksEditButtonItem = (event) => {
    if (event.target.matches('.tasks__field-container')) {
        const tasksEditButtonItem = event.target.querySelector('.tasks__field-container--item-edit');
        tasksEditButtonItem.classList.remove('hidden');
        tasksEditButtonItem.classList.remove('tasks__field-container--item-edit-disappear');
        tasksEditButtonItem.classList.add('tasks__field-container--item-edit-appear');
    }
}

const removeTasksEditButtonItem = (event) => {
    const tasksEditButtonItem = document.querySelectorAll('.tasks__field-container--item-edit');
    tasksEditButtonItem.forEach(buttonItem => {
        buttonItem.classList.remove('tasks__field-container--item-edit-appear');
        buttonItem.classList.add('tasks__field-container--item-edit-disappear');
        setTimeout(() => {
            buttonItem.classList.add('hidden');
        }, 300);
    })
}

document.addEventListener('mouseover', renderTasksEditButtonItem);
document.addEventListener('mouseleave', removeTasksEditButtonItem);