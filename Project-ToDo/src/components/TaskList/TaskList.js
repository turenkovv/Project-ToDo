import React from 'react';
import Task from './Task/Task';
import { connect } from 'react-redux';


const TaskList = ({tasks}) => {
    return (
        <div style={{marginTop:"11px", width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
            {tasks.map(({ id, name, description, status }) => <Task id={id} name={name} description={description} status={status} key={id} />)}
        </div>
    );
};


const mapStateToProps = (state) => {
    return{
        tasks: state.todo.todoList
    };
};


export default connect(mapStateToProps)(TaskList);