import {Tasks} from 'actions';

const getInitialState = () => ({tasks: [] });

const tasksReducer = (state = getInitialState(), action) => {
    // console.log(state, action)
    switch(action.type) {
        case 'TASKS_CHANGE':
            return {
                ...state,
                tasks: action.tasks
            };
        default:
            return state;
    }
};



export default tasksReducer;