import React from 'react';
import { removeFromList, updateStatus } from '../../../store/todoSlice';
import { connect } from 'react-redux';
import './task.css';

const Task = ({ id, name, description, status, removeFromList, updateStatus }) => {
    
    const deleteTask = () => {
        removeFromList({ id, name, description, status });
    }

    const handleCheckbox = () => {
        updateStatus({ id, name, description, status: !status });
    }

    return (
        <div className='task'>
            <label className="checkbox"><input type="checkbox" onChange={handleCheckbox} checked={status}/><span className="checkmark"></span></label>
            <div className="text name">{name}</div>
            <div className="text desc">{description}</div>
            <button className='deleteBtn' onClick={deleteTask}><img src="assets/bin.png" alt=""/></button>
        </div>
    );
}

const mapDispatchToProps = {
    removeFromList, updateStatus
    
}

export default connect(null, mapDispatchToProps)(Task);
