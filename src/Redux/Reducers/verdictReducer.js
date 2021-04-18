const verdictReducer = (state = "?", action) => {
    switch (action.type) {
        case 'SUCCESSFUL_API_RESPONSE':
            return action.payload.verdict
        case 'UNSUCCESSFUL_API_RESPONSE':
            return "?"
        default:
            return state
    }
};

export default verdictReducer;