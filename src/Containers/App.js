import React, {Component} from "react"
import "babel-polyfill"
import {createStore} from 'redux'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
//import screens here
import * as taskActions from "../Store/Tasks/actions"
import * as taskSelector from "../Store/Tasks/selector"

class App extends Component {


componentDidMount(){
    this.props.taskActions.addNewTask("Home gone")
}

    render() {
        // console.log("Hey", this.props.tasks)

        return (
            //add screen inside the div
            <div>
                <h1>Tasks</h1>
                {
                    this.props.tasks ? (
                        <ul>
                            {
                                
                                this.props.tasks.map((task, i) => (
                                    <li key={i}>{task.name}</li>
                                ))
                            }
                        </ul>
                    ) : (
                        <h4>No Tasks</h4>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        tasks: taskSelector.getTasks(state)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        taskActions: bindActionCreators(taskActions, dispatch)
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(App)