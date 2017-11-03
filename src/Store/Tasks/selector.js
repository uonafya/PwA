export function getTasks(state) {
    console.log(state.taskReducer.tasks)
    return state.taskReducer.tasks
}