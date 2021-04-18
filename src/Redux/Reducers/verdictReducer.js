const verdictReducer = (state = "?", action) => {
    switch (action.type) {
        case 'SUCCESSFUL_API_RESPONSE':
            //return (action.payload.confidence > 0.5 ? "Yes" : "No")
            return (action.payload.verdict ? "Yes" : "No")
        case 'UNSUCCESSFUL_API_RESPONSE':
            return "?"
        default:
            return state
    }
};

export default verdictReducer;