import React from "react";
import Menu from "../Menu/Menu";

function Header() {
    return (
        <div
            className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal">My Events</h5>
            <Menu />
        </div>
    );
}

export default Header;
