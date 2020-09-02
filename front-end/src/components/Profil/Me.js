import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { showProfil } from "../../_actions/user_actions";
import {SERVER_URI} from "../../config";
function Me(){
    const dispatch = useDispatch();
    const infoUser = useSelector((state) => state.user.userInfo);

    useEffect(() =>{
        showProfil().then((data) => dispatch(data));
    }, [dispatch])

    return (
        <div>
            <div>{infoUser?.username}</div>
            <div>
                <span>{infoUser?.first_name} {infoUser?.last_name}</span>
            </div>
            <div>
                <img src={`${SERVER_URI}${infoUser?.avatar}`} alt={infoUser?.avatar} />
            </div>
            <div>About me
                {infoUser?.resum}
            </div>
            <div>Birthday : {infoUser?.birthday.date}</div>


        </div>
    )
}

export default Me;