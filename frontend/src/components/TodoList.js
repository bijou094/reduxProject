import { connect } from 'react-redux';
import React from 'react';
import TodoItems from './TodoItems';
import { selectChoice} from '../store/actions'

const TodoList = ({todos}) => {
    return (
        <div>
            <ul className='list-group'>
                {todos && todos.map(t =>(
                    <TodoItems key={t.name} todo={t}/>
                ))}
                
            </ul>

        </div>
    );
}

export default connect((state) =>{
    const filter =state.filter;
    let todos;
    switch(filter){
        case selectChoice.SHOW_DONE:{
            todos=state.todos.filter(t => t.done)
            break
        }
        case selectChoice.SHOW_ACTIVE: {
            todos = state.todos.filter(t => t.done)
            break
        }
        default :{
            todos=state.todos
            break
        }
    }
    // il va retourné un objet les props du composant
    return{
        //la clés si nom de proprité et la valeur la partie de state qu'on veut
        todos 
    }
}
)(TodoList)