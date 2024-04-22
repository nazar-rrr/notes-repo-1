const theAddButton = document.querySelectorAll('.add-tasks__field-container');

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

const renderTasksFieldContainerItem = (event) => {
    const target = event.target;
    if (target.matches('.tasks__field-container')) {
        renderTasksFieldContainerItemEdit(target);
    }
};

const renderTasksFieldContainerItemEdit = (element) => {
    const fieldContainerItemEdit = element.querySelector('.tasks__field-container--item-edit');
    fieldContainerItemEdit.classList.remove('hidden', 'tasks__field-container--item-edit-disappear');
    fieldContainerItemEdit.classList.add('tasks__field-container--item-edit-appear');
};

const removeTasksFieldContainerItem = () => {
    const fieldContainerItemEdits = document.querySelectorAll('.tasks__field-container--item-edit');
    fieldContainerItemEdits.forEach(fieldContainerItemEdit => {
        fieldContainerItemEdit.classList.remove('tasks__field-container--item-edit-appear');
        fieldContainerItemEdit.classList.add('tasks__field-container--item-edit-disappear');
        setTimeout(() => {
            fieldContainerItemEdit.classList.add('hidden');
        }, 300);
    });
};

document.addEventListener('mouseover', renderTasksFieldContainerItem);
document.addEventListener('mouseleave', removeTasksFieldContainerItem);
