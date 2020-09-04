import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {SERVER_URI} from "../../config";

function Me(){
    const infoUser = useSelector((state) => state.user.userInfo);

    return (
        <div>
            <div>{infoUser?.username}</div>
            <div>
                <span>{infoUser?.first_name} {infoUser?.last_name}</span>
            </div>
            <div>
                <img src={`${SERVER_URI}${infoUser?.avatar}`} alt={`profil avatar :  ${infoUser?.username}`} />
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
