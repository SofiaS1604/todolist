// let tasks = [];

const add = (task) => (dispatch, getState) =>{
    // tasks.push(task);
    dispatch({
        type: 'TASKS_CHANGE',
        tasks: [...getState().tasks.tasks, task]
    });
    console.log(task)
};



const Tasks =  {
    actions: {
        add
    }
};


export default Tasks;
