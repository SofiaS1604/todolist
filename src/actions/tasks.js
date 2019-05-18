export const tasksAdd = (task) => (dispatch, getState) => {
    dispatch({
        type: 'TASKS_CHANGE',
        tasks: [...getState().tasks.list, task]
    });
};
