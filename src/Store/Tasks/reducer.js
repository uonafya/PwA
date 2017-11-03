import Immutable from "seamless-immutable"
import * as types from "./actionTypes"


let intialState = Immutable({
    tasks: undefined
})

export function taskReducer(state=intialState, action={}) {
    switch (action.type) {
        case types.newTask:
            return state.merge({
                    tasks: addNewTaskToTaskList(state.tasks, action.taskName)
                }
            )

        default:
            return state

    }
}

function addNewTaskToTaskList(tasks, newTask) {
    if (tasks) {
        taskList = Immutable.asMutable(tasks, {deep: true})
        taskList.push({
            id: taskList.length - 1,
            name: newTask
        })
    } else {
        let taskList = []
        taskList.push({
            id:  1,
            name: newTask
        })
        return taskList
    }
}