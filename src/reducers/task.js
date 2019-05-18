const getInitialState = () => ({list: []});

const tasksReducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case 'TASKS_CHANGE':
            return {
                ...state,
                list: action.tasks,
            };
        default:
            return state;
    }
};

export default tasksReducer;