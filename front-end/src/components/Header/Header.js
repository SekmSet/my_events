import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../_actions/user_actions";
import { Button } from  "../componentModels/form"

function Header() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const handleDisconnect = (e) => {
        e.preventDefault();
        dispatch(logoutUser());
    };

    return (
        <header>

            <ul>
                <li>
                    {!user.loginSucces &&
                        <Link to="/register">register</Link>
                    }

                    {user.loginSucces &&
                        <Button type="submit" name="Logout" onClick={handleDisconnect} />
                    }
                </li>
            </ul>
        </header>
    );
}

export default Header;