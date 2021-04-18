import axios from 'axios'

export const submitText = (text) => async (dispatch, getState) => {
    const link = "http://35.194.13.147:8081/api/parse";
    dispatch({type: "SUBMIT"});
    const response = await axios.post(link, {text})
    console.log(response)
    dispatch({type: (response.status !== 400 ? 'SUCCESSFUL_API_RESPONSE' : 'UNSUCCESSFUL_API_RESPONSE'), payload: response.data})
}
