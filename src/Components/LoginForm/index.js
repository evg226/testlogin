import CircularProgress from '@mui/material/CircularProgress';
import { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { loadProfile } from "../../Store/actions";
import { getProfile } from "../../Store/selectors";

export const Login = () => {

    const [name, setName] = useState("");
    const [pwd, setPwd] = useState("");
    const dispatch = useDispatch();
    const profile = useSelector(getProfile, shallowEqual);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loadProfile(name, pwd));
    }
    
    return (
        <div className="loginForm">
            <h1>Главная</h1>
            <p>Страница авторизации</p>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="username" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="password" placeholder="password" value={pwd} onChange={ (e)=>setPwd(e.target.value)} />
                <button disabled={!(name && pwd)} type="submit">Войти</button>
            </form>
            {profile.isLoading && <CircularProgress />}
            {profile.error && <h4>{ profile.error}</h4>}
        </div>
    )
};