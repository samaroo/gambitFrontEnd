//exports combined reducers

//import combineReducers fucntion
import {combineReducers} from 'redux'

//import all the reducers
// import {authReducer} from './AuthReducer'
// import {reducer as formReducer} from 'redux-form'
// import {streamsReducer} from './StreamsReducer'
// import {currentPageReducer} from './CurrentPageReducer'
// import {creationStatusReducer} from './CreationStatusReducer.js'

const fillerReducer1 = (state = "Initial State 1", action) => {return state};
const fillerReducer2 = (state = "Initial State 2", action) => {return state};

export const combinedReducers = combineReducers({
    state1: fillerReducer1,
    state2: fillerReducer2
});