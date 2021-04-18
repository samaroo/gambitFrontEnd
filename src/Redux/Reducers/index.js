//exports combined reducers

//import redux and redux-form functions
import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';

//import reducers
import verdictReducer from './verdictReducer';
import confidenceReducer from './confidenceReducer';
import responseStatusReducer from './responseStatusReducer';

export const combinedReducers = combineReducers({
    form: formReducer,
    verdict: verdictReducer,
    confidence: confidenceReducer,
    responseStatus: responseStatusReducer
});