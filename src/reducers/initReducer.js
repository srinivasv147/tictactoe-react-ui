import InitState from '../state/initState';

const initReducer = function init(state = InitState, action) {

    switch(action.type){
        case "MODIFY_USER": return modifyUserImpl(state, action);
        default: return state;
    }

}

function modifyUserImpl(state, action){

    let newState = JSON.parse(JSON.stringify(state));//deep copy of original state
    newState.user = action.user;
    return newState;

}

export default initReducer;