const responseStatusReducer = (state = "neutral", action) => {
    switch (action.type) {
        case 'SUCCESSFUL_API_RESPONSE':
            return "successful"
        case 'UNSUCCESSFUL_API_RESPONSE':
            return "unsuccessful"
        default:
            return state
    }
};

export default responseStatusReducer;