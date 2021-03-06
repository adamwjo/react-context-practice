export default (state, action) => {
    switch(action.type){
        case "DELETE":
            return {
                ...state, transactions: state.transactions.filter(t => t.id !== action.payload)
            }
        default:
            return state
    }
}