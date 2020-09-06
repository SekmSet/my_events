import React from 'react';
import {Link} from "react-router-dom";
import {logoutUser} from "../../_actions/user_actions";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";

function Menu() {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user);

    const handleDisconnect = (e) => {
        e.preventDefault();
        toast('🦄 You are disconnected !', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        dispatch(logoutUser());
    };

    return (
        <nav className="my-2 my-md-0 mr-md-3">
            <Link to={"/events"} className="p-2 text-dark" href="#">Events</Link>
            {!user.loginSucces && <Link to={"register"} className="p-2 text-dark" href="#">Register</Link>}
            {!user.loginSucces && <Link to={"/login"} className="p-2 text-dark" href="#">Connexion</Link>}
            {user.loginSucces && <Link to={"/me"} className="p-2 text-dark">Profil</Link>}
            {user.loginSucces &&<button className="p-2 text-dark" onClick={handleDisconnect}>Logout</button>}
        </nav>
    )
}

export default Menu