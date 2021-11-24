const initState = {
    dashboard:true,
    voice:true,
    signedIn:false
}
const rootReducer = (state = initState , action)=>{
    switch (action.type) {
        case DASHBOARD:
            return {
                ...state,
                dashboard:!state.dashboard
            }
            break;
    
        default:
            break;
    }   
    return state;
}


export default rootReducer;