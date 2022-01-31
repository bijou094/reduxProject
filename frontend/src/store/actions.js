// declarer les action qu'il nous faut

export const ADD_TODO = "add todo";
export const DELETE_TODO = "delete todo";
export const CHECKED_TODO = "cheked todo";
export const CHOOSE_FILTER = "choose filter"



export const selectChoice = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_DONE: 'SHOW_DONE',
    SHOW_ACTIVE: 'SHOW_ACTIVE',

}


// cree les actions
// 1 action pour ajouter un todo
export const addList = (todo) => {
    return {
        type: ADD_TODO,
        todo
    }
}

// 2 action pour supprimer un todo
export const deleteList = (index) => {
    return {
        type: DELETE_TODO,
        index
    }
}

// 3 action pour changer  un filtre
export const chekedList = (index) => {
    return {
        type: CHECKED_TODO,
        index
    }
}

// 4 action pour ajouter un filtre un todo
export const choiceFilter = (selectChoice) => {
    return {
        type: CHOOSE_FILTER,
        selectChoice
    }
}