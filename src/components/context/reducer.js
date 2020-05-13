export default function (state, action){
    switch (action.type) {
        case "ADD_TASK":
            return [
                ...state,
                {
                    id: state.length, date: new Date().toLocaleDateString(), title: action.payload, done: false
                }
            ];
        case "DONE_TASK":
            return state.map(item => {
                if (action.payload === item.id){
                    item.done = !item.done
                }
                return item;
            });
        case "DELETE_TASK":
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
}