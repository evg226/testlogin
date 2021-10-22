import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({ auth, ...rest }) => {
    return auth ?
        (<Route {...rest} />) :
        (<Redirect to={{ pathname: "/" }} />)
};

export const PublicRoute = ({ auth, ...rest }) => {
    return !auth ?
        <Route {...rest} /> :
        <Redirect to="/" />;
};