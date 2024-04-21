import { tasksAddition } from "./todo-page";

const theButton = document.querySelectorAll('.tasks__field-container');
const theAddButton = document.querySelectorAll('.add-tasks__field-container');

theButton.forEach(button => {
    tasksAddition()
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





