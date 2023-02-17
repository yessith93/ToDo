import React from 'react';
import '../styles/TodosLoading.css'

function TodosLoading(props) {
    return (
        <div className='LoadingTodo-container'>
            <span className='LoadingTodo-completeIcon'></span>
            <p className="LoadingTodo-text">Cargando ToDos...</p>
            <span className="LoadingTodo-deleteIcon"></span>
        </div>
    );
}

export default TodosLoading;