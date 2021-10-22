import { shallowEqual, useSelector } from "react-redux";
import { BrowserRouter,Switch,Route, Link,Redirect } from "react-router-dom"
import { Login } from "../Components/LoginForm";
import { Profile } from "../Components/Profile";
import { getProfile } from "../Store/selectors";
import {PrivateRoute} from "./routeTypes";

export const Router = () => {
    
    const profile = useSelector(getProfile,shallowEqual);
    
    return (
        <BrowserRouter>
            <ul>
                <li>
                    <Link to="/">Главная</Link>
                </li>
                <li>
                    <Link to="/profile">Профиль</Link>
                </li>
            </ul>
            
            <Switch >
                <PrivateRoute auth={profile.activeUser} path="/profile">
                    <Profile />
                </PrivateRoute>
                <Route path="/">
                    {profile.activeUser? <Redirect to="/profile" /> :< Login />}
                </Route>
                <Route>
                    <h3>Page not found</h3>
                </Route>
            </Switch>
        </BrowserRouter>
    )
};