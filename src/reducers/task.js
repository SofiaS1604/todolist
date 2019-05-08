import {Tasks} from 'actions';

const getInitialState = () => ({
    byId: {},
    ids: []
});

const tasksReducer = (state = getInitialState(), action) => {
    // console.log(state, action)
    switch(action.type) {
        case Tasks:
            return {
                byId: action.tasksById,
                ids: action.ids
            };
        default:
            return state;
    }
};



export default tasksReducer;