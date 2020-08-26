import React from "react";
// import { logoutUserTest } from "../../_actions/user_actions";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Header() {
    // const dispatch = useDispatch();
    // const user = useSelector((state) => state.user);
    //
    // const handleDisconnect = (e) => {
    //     e.preventDefault();
    //     dispatch(logoutUserTest());
    // };

    return (
        <header>

            <ul>
                <li>
                    <Link to="/register">register</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;