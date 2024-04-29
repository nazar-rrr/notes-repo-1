// const toDoPageTasks = document.querySelector('.todo-page__tasks');

// const renderTasksFieldContainerItem = (event) => {
//     const target = event.target;
//     if (target.matches('.tasks__field-container')) {
//         renderTasksFieldContainerItemEdit(target);
//     }
// };

// const renderTasksFieldContainerItemEdit = (element) => {
//     const renderFunctionality = (event) => {
//         if (event.target.matches('.tasks__field-container')) {
//             const tasksFieldContainerItemEdit = document.querySelector('.tasks__field-container--item-edit');
//             tasksFieldContainerItemEdit.removeAttribute('readonly')
//         }
//     };

//     document.addEventListener('click', renderFunctionality)
//     const fieldContainerItemEdit = element.querySelector('.tasks__field-container--item-edit');
//     fieldContainerItemEdit.classList.remove('hidden', 'tasks__field-container--item-edit-disappear');
//     fieldContainerItemEdit.classList.add('tasks__field-container--item-edit-appear');
// };

// const removeTasksFieldContainerItem = () => {
//     const fieldContainerItemEdits = document.querySelectorAll('.tasks__field-container--item-edit');
//     fieldContainerItemEdits.forEach(fieldContainerItemEdit => {
//         fieldContainerItemEdit.classList.remove('tasks__field-container--item-edit-appear');
//         fieldContainerItemEdit.classList.add('tasks__field-container--item-edit-disappear');
//         setTimeout(() => {
//             fieldContainerItemEdit.classList.add('hidden');
//         }, 300);
//     });
// };


// const renderFunctionality = (event) => {
//     if (event.target.matches('.tasks__field-container--item-edit')) {
//         const itemToRemove = event.target.closest('.tasks__field-container');
//         if (itemToRemove) {
//             removeTasksFieldContainerItem();
//             setTimeout(() => {
//                 itemToRemove.setAttribute('class', 'itemDisappear')
//             }, 200)
//             setTimeout(() => {
//                 toDoPageTasks.removeChild(itemToRemove);
//             }, 800)
//         }
//     }
// };

// document.addEventListener('click', renderFunctionality);


// document.addEventListener('mouseover', renderTasksFieldContainerItem);
// document.addEventListener('mouseleave', removeTasksFieldContainerItem);



// theButtons.forEach(button => {
//     button.addEventListener('click', manipulateFieldContainerItems);
// });

// const renderTasksEditButtonItem = (event) => {
//     if (event.target.matches('.tasks__field-container')) {
//         const tasksEditButtonItem = document.querySelector('.tasks__field-container--item-edit');
//         tasksEditButtonItem.classList.remove('hidden');
//         tasksEditButtonItem.classList.remove('tasks__field-container--item-edit-disappear');
//         tasksEditButtonItem.classList.add('tasks__field-container--item-edit-appear');
//     }
// }

// const removeTasksEditButtonItem = (event) => {
//     const tasksEditButtonItem = document.querySelector('.tasks__field-container--item-edit');
//     tasksEditButtonItem.classList.remove('tasks__field-container--item-edit-appear');
//     tasksEditButtonItem.classList.add('tasks__field-container--item-edit-disappear');
//     setTimeout(() => {
//         tasksEditButtonItem.classList.add('hidden');
//     }, 300);

// }

// document.addEventListener('mouseover', renderTasksEditButtonItem);
// document.addEventListener('mouseleave', removeTasksEditButtonItem);



// const theButton = document.querySelectorAll('.tasks__field-container');
// const theAddButton = document.querySelectorAll('.add-tasks__field-container');


// theAddButton.forEach(button => {
//     const fieldContainerItemEdit = button.querySelector('.add-tasks__field-container--item-vector');

//     const renderFieldContainerItemEdit = () => {
//         fieldContainerItemEdit.classList.remove('hidden');
//         fieldContainerItemEdit.classList.remove('add-tasks__field-container--item-vector-disappear');
//         fieldContainerItemEdit.classList.add('add-tasks__field-container--item-vector-appear');
//     };

//     const removeFieldContainerItemEdit = () => {
//         fieldContainerItemEdit.classList.remove('add-tasks__field-container--item-vector-appear');
//         fieldContainerItemEdit.classList.add('add-tasks__field-container--item-vector-disappear');
//         setTimeout(() => {
//             fieldContainerItemEdit.classList.add('hidden');
//         }, 300);
//     };

//     button.addEventListener('mouseover', renderFieldContainerItemEdit);
//     button.addEventListener('mouseleave', removeFieldContainerItemEdit);
// });

// theButton.forEach(button => {
//     const fieldContainerItems = button.querySelector('.tasks__field-container--items');
//     const fieldContainerItemEdit = button.querySelector('.tasks__field-container--item-edit');

//     const renderFieldContainerItemEdit = () => {
//         fieldContainerItemEdit.classList.remove('hidden');
//         fieldContainerItemEdit.classList.remove('tasks__field-container--item-edit-disappear');
//         fieldContainerItemEdit.classList.add('tasks__field-container--item-edit-appear');
//     };
// const renderFunctionality = (event) => {
//     if (event.target.matches('.tasks__field-container--item-edit')) {
//         const itemToRemove = event.target.closest('.tasks__field-container');
//         if (itemToRemove) {
//             removeTasksFieldContainerItem();
//             setTimeout(() => {
//                 itemToRemove.setAttribute('class', 'itemDisappear')
//             }, 200)
//             setTimeout(() => {
//                 toDoPageTasks.removeChild(itemToRemove);
//             }, 800)
//         }
//     }
// };
//     const removeFieldContainerItemEdit = () => {
//         fieldContainerItemEdit.classList.remove('tasks__field-container--item-edit-appear');
//         fieldContainerItemEdit.classList.add('tasks__field-container--item-edit-disappear');
//         setTimeout(() => {
//             fieldContainerItemEdit.classList.add('hidden');
//         }, 300);

//         if (fieldContainerItems.classList.contains('tasks__field-container--items-appear')) {
//             fieldContainerItems.classList.remove('tasks__field-container--items-appear');
//         }
//         fieldContainerItems.classList.add('tasks__field-container--items-disappear');
//         setTimeout(() => {
//             fieldContainerItems.classList.add('hidden');
//         }, 300);
//     };

//     button.addEventListener('mouseover', renderFieldContainerItemEdit);
//     button.addEventListener('mouseleave', removeFieldContainerItemEdit);
// });



