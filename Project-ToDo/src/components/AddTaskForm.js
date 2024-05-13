import { useState } from 'react';
import { addToList } from '../store/todoSlice';
import { connect } from 'react-redux';
import './addTaskForm.css';
import uuid from 'react-uuid';

const AddTaskForm = ({addToList}) => {
    
    const [name, setName] = useState("");
    const [description, setDescrition] = useState("");

    const addTask = () => {
        addToList({ id: uuid(), name, description, status: false });
        setName("");
        setDescrition("");
    }

    return (
        <div className='wrapperAdd'>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <label className='nameLabelTask' htmlFor="taskName">Name</label>
                <input className='nameTask' name='taskName' type="text" value={name} onChange={e => setName(e.target.value)}/>
            </div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <label className='descriptionLabelTask' htmlFor="taskDescription">Description</label>
                <input className='descriptionTask' name='taskDescription' type="text" value={description} onChange={e => setDescrition(e.target.value)}/>
            </div>
            <button className='addButton' onClick={addTask}><img src="assets/add.png" alt="add"/></button>
        </div>
    );
}

const mapDispatchToProps = {
    addToList,
}

export default connect(null, mapDispatchToProps)(AddTaskForm);