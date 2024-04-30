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
    const vectorsContainerItems = document.querySelectorAll('.vectors-container__item--set-important, .vectors-container__item--change-text-size, .vectors-container__item--delete');

    vectorsContainerItems.forEach(item => {
        if (item.classList.contains('item--vectors-container-appear')) {
            item.classList.remove('item--vectors-container-appear');
        }
        item.classList.add('item--vectors-container-disappear');
        setTimeout(() => {
            item.classList.add('hidden');
        }, 300);
    });

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