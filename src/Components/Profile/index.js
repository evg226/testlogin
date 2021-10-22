import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { loadProfile } from "../../Store/actions";
import { getProfile } from "../../Store/selectors";

export const Profile = () => {

    const dispatch = useDispatch();
    const profile = useSelector(getProfile, shallowEqual);

    const handleLogOut = () => {
        dispatch(loadProfile(""));
    }
    return (
        <div>
            <h1>Страница профиля: {profile.activeUser }</h1>
            <button onClick={handleLogOut}>Выйти</button>
        </div>
    );
}