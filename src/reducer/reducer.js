const initialState = {
    bal : 5000
};
const reducer = (state=initialState,action)=>{
    const newState = {...state};    
    switch(action.type){
        case "DEPOSIT":
            newState.bal+=action.value;
            break;
        case "WITHDRAW":
            newState.bal-=action.value;
            break;
    }
    return newState;
};
export default reducer;