export const tasksChange = (tasks) => (dispatch, getState) => {
    dispatch({
        type: 'TASKS_CHANGE',
        tasks
    });
};
