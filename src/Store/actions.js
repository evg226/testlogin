export const SET_PROFILE = "PROFILE::SET_PROFILE";

export const setProfile = (userName,isLoading,error) => {
    return {
        type: SET_PROFILE,
        payload: { userName, isLoading,error }
    };
};

export const loadProfile = (userName,pwd) =>(dispatch)=> {
    dispatch(setProfile("", true, false));
    if (!userName) {
        dispatch(setProfile("", false, "Необходима авторизация"));
    } else {
        setTimeout(() => { //Задержка - т.к. далее идет ко, который должен быть на сервере
            if (userName === "developer21" && pwd === "123456") {
                dispatch(setProfile(userName, false, ""));
            } else {
                dispatch(setProfile("", false, "Неправильный логин или пароль"));
            }
        }, 1500);
    };
        
    
}