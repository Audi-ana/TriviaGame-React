

const initialState = {
     
    playerName:'',
    isAuthenticated: false,
    pastScores:[],
    selectedCategory: '',
    counter: 0
}

const reducer = (state = initialState, action)=>{

    switch(action.type){
        case 'STORE_SELECTED_CATEGORY':
            return{
                ...state,
                selectedCategory:action.value
            }
        case 'INC_COUNTER':
            return {
                ...state,
                counter : state.counter + 1
            }
        default:
            return state
    }
    

}

export default reducer