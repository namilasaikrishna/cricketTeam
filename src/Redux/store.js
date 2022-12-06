export const gameReducer=(state={
    cricketTeam:[],
    // footballTEam:[],
    bulb:false,
},action)=>{
    if(action.type==="bulb"){
        return{
            ...state,
            bulb:!state.bulb,
        }
    }
    if(action.type==="cricketTeam"){
        return{
            ...state,
            cricketTeam:[action.payload,...state.cricketTeam]
        }
    }
    // if(action.type==="footbalTeam"){
    //     return{
    //         ...state,
    //         footballTEam:[action.payload,...state.footballTEam]
    //     }
    // }
    return state;
}