const addTasks = () => {
    renderTask();
    pushTask();
    manipulateTasksHeading();
};

const renderTask = () => {
    manipulateVariableItems(tasksItem.body, 'classList', 'add', 'tasks__item');
    equalVariableItems(tasksItem.body, 'innerHTML', tasksItem.inner)
    equalVariableItems(addTasksField, 'value','')
};

const pushTask = () => {
    manipulateVariableItems(theTasksContainer, 'appendChild', null, 'tasksItem.body');
    manipulateVariableAttributes(tasksItem.body, 'setAttribute', 'id', `${itemNumber}`);
    itemNumber++;
    manipulateVariableItems(tasksArray, 'push', null, 'tasksItem');
    moveToLocalStorage();
};

const moveToLocalStorage = () => {
    manipulateVariableAttributes(localStorage, 'setItem', `Task ${tasksArray.indexOf(tasksItem)}`, tasksItem);
};

const manipulateVariableItems = (element, firstAction, secondAction, manipulatedItem) => {
    element[firstAction][secondAction](manipulatedItem);
};

const equalVariableItems = (element, action, manipulatedItem) => {
    element[action] = manipulatedItem;
};

const manipulateVariableAttributes = (element, action, attributeType, manipulatedAttribute) => {
    element[action] = (attributeType, manipulatedAttribute);
};
