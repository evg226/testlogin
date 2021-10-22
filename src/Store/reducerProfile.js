import { SET_PROFILE } from "./actions";

const initialProfile = {
    activeUser: "",
    error: "Необходима авторизация",
    isLoading:false
};

export const reducerProfile = (state=initialProfile,action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {
                activeUser: action.payload.userName,
                error: action.payload.error,
                isLoading:action.payload.isLoading,
                
            }
        default:
            return state;
    }
}