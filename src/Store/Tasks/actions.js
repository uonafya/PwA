import * as types from "./actionTypes"

export function addNewTask(taskName) {
    return function (dispatch, getState) {
        dispatch({
            type: types.newTask,
            'taskName': taskName
        })
    }
}