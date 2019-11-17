import { 
    all,
    put, 
    takeEvery,
    take,
    call
} from 'redux-saga/effects';
import { actions } from '../interfaces/interfaces';
import actionTypes from '../actions/actionTypes';

const buildActionType = (type: string) => {
    // TODO: switch over action types
}

function* addFoodItemWatcherSaga() {
    const action = yield take(actionTypes.addFoodItem);
    yield call(addFoodItemWorkerSaga, action);
};

function* addFoodItemWorkerSaga(action: actions) {
    // TODO: instead of just doing a put here we need to add an async request to the server and then put with the new data returned
    yield put({ type: actionTypes.sagadAddFoodItem, payload: action.payload })
};

export default function*() {
    yield all([
        addFoodItemWatcherSaga()
    ])
}