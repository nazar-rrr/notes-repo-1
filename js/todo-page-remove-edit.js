const removeTasksFieldContainerHover = (event) => {
    const target = event.target;
    if (target.matches('.tasks__field-container')) {
        removeFieldContainerItemEdit(target);
    }
};
const removeFieldContainerItemEdit = (element) => {
    const fieldContainerItemEdit = element.querySelector('.tasks__field-container--item-edit');
    fieldContainerItemEdit.classList.remove('tasks__field-container--item-edit-appear');
    fieldContainerItemEdit.classList.add('tasks__field-container--item-edit-disappear');
    setTimeout(() => {
        fieldContainerItemEdit.classList.remove('hidden');
    }, 300)
};

document.addEventListener('mouseleave', removeTasksFieldContainerHover);
