import React from 'react';
import TodoItems from './TodoItems';

const TodoList = (props) => {
    return (
        <div>
            <ul className='list-group'>
                <TodoItems />
            </ul>

        </div>
    );
}

export default TodoList;