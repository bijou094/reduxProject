
import { ADD_TODO, DELETE_TODO, CHECKED_TODO, CHOOSE_FILTER, selectChoice } from './actions'




export const todos = (state=[], action)=>{
    switch (action.type) {
        case ADD_TODO:{
            return [...state.todos, action.todo]                      
           
        }
            
        case DELETE_TODO:{
            return state.todos.filter((t, i) => i !== action.index)
           
        }
            
        case CHECKED_TODO:{
            return state.todos.map((t, i) => {
                if (i === action.index) {
                    t.done = !t.done;
                }
                return t;
            })
        
        }
            
        default:
            return state;
    }


}
 


export const filter = (state = selectChoice.SHOW_ALL, action) => {
    switch (action.type) {
        case CHOOSE_FILTER :{
            return  action.filter         
           
        }        
        
        default:
            return state;
    }
}




