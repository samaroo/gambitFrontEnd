const confidenceReducer = (state = 50, action) => {
    switch (action.type) {
        case 'SUCCESSFUL_API_RESPONSE':
            return action.payload.confidence
        case 'UNSUCCESSFUL_API_RESPONSE':
            return 50
        default:
            return state
    }
};

export default confidenceReducer;