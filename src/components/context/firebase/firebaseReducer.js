export const firebaseReducer = (state, action) =>{
    switch (action.type) {
        case "ADD_TASK":
            return ({...state, notes: [...state.notes, action.payload]});
        case "DONE_TASK":
            return ({...state, done: [...state.notes, state.notes.map(item=> item.id===action.payload ? item.done=true : item.done)]});
        case "DELETE_TASK":
            return ({...state, notes: state.notes.filter(note => note.id !== action.payload)});
        case "FETCH_NOTES":
            return ({...state, notes: action.payload});
        default:
            return state;
    }
};