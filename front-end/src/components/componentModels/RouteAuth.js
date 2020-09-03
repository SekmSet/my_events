import React from "react";
import {useSelector} from "react-redux";
import {Route, Redirect} from "react-router-dom";

function RouteAuth({ children, ...rest }) {

    const {loginSucces} = useSelector((state) => state.user);

    return (
        <Route
            {...rest}
            render={() =>
                loginSucces ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/register",
                        }}
                    />
                )
            }
        />
    );
}

export default RouteAuth;
