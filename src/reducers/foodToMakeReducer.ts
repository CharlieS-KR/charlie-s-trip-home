import { items, actions } from '../interfaces/interfaces';
import actionTypes from '../actions/actionTypes';

const initialState: object[] = [
    {
        title: 'Chili Spaghetti',
        description: 'Got to make this Cincy classic vegie-friendly!',
        createdBy: 'Charlie'
    },
    {
        title: 'Stroganoff',
        description: 'Always a hit',
        createdBy: 'Charlie'
    },
    {
        title: 'Eggplant Parm',
        description: 'Getting this from Buca',
        createdBy: 'Charlie'
    }
];

function foodToMake(state = initialState, action: actions) {
    switch (action.type) {
        case actionTypes.sagadAddFoodItem:
            const newState = [...state, action.payload];
            return newState;
        default:
            return state;
    }
};

export default foodToMake;