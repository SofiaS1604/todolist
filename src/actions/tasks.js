// let tasks = [];

export const tasksAdd = (task) => (dispatch, getState) =>{
    // tasks.push(task);
    dispatch({
        type: 'TASKS_CHANGE',
        tasks: [...getState().tasks.tasks, task]
    });
    console.log(task)
};
