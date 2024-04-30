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
    const itemSetImportant = document.querySelector('.vectors-container__item--set-important');
    const itemChangeTextSize = document.querySelector('.vectors-container__item--change-text-size');
    const itemDelete = document.querySelector('.vectors-container__item--delete');

    if (itemSetImportant.classList.contains('item--vectors-container-appear') && itemChangeTextSize.classList.contains('item--vectors-container-appear') && itemDelete.classList.contains('item--vectors-container-appear')) {
        itemSetImportant.classList.remove('item--vectors-container-appear');
        itemChangeTextSize.classList.remove('item--vectors-container-appear');
        itemDelete.classList.remove('item--vectors-container-appear');
    }

    itemSetImportant.classList.add('item--vectors-container-disappear');
    itemChangeTextSize.classList.add('item--vectors-container-disappear');
    itemDelete.classList.add('item--vectors-container-disappear');

    setTimeout(() => {
        itemSetImportant.classList.add('hidden');
        itemDelete.classList.add('hidden');
        itemChangeTextSize.classList.add('hidden');
    }, 300);

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