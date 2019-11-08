import { items, actions } from '../interfaces/interfaces';
import actionTypes from '../actions/actionTypes';

const initialState: items[] = [
    {
        title: 'Chili Spaghetti',
        description: 'Got to make this Cincy classic vegie-friendly!',
        createdBy: 'Charlie'
    }
];

function foodToMake(state = initialState, action: actions) {
    switch (action.type) {
        default:
            return state;
    }
};

export default foodToMake;