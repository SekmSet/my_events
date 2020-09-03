import React from "react";
import {useSelector} from "react-redux";
import {SERVER_URI} from "../../config";
import {Link} from "react-router-dom";

function Me(){
    const infoUser = useSelector((state) => state.user.userInfo);

    return (
        <div>
            <div>{infoUser?.username}</div>
            <div>
                <span>{infoUser?.first_name} {infoUser?.last_name}</span>
            </div>
            <div>
                <img src={`${SERVER_URI}${infoUser?.avatar}`} alt={infoUser?.avatar} />
            </div>
            <div>About me : 
                <p>{infoUser?.resum}</p>
            </div>
            <div>Birthday : {infoUser?.birthday.date}</div>

            <Link to={"/me/update"}> Update </Link>
        </div>
    )
}

export default Me;
