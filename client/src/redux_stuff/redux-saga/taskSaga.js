import {takeEvery,call,put} from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import * as service from '../service/taskService';
import * as actions from '../actions/taskAction';
//Worker Saga
function* loadTask(){
    const tasks = yield call(service.getTasks)
    yield put(actions.taskLoadAction(tasks))
}

//Watcher Saga
function* watchLoadTask(){
   yield takeEvery(types.LOAD_TASKS, loadTask)
}

export function* taskSaga(){
    yield all([
        watchLoadTask()
    ])
}