import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router";
import { showUserProfile } from "../../_actions/user_actions"
import {SERVER_URI} from "../../config";

function Profil(){

    const dispatch = useDispatch();
    const { id } = useParams();
    const infoUser = useSelector((state) => state.user.foreignUserInfo);

    useEffect(()=>{
        showUserProfile({id}).then((data) => {
            dispatch(data);
        });
    }, [dispatch, id])

    return (
        <div>
            <div>{infoUser?.username}</div>
            <div>
                <span>{infoUser?.first_name} {infoUser?.last_name}</span>
            </div>
            <div>
                <img src={`${SERVER_URI}${infoUser?.avatar}`} alt={`profil avatar :  ${infoUser?.username}`}  />
            </div>
            <div>About me :
                <p>{infoUser?.resum}</p>
            </div>
            <div>Birthday : {infoUser?.birthday.date}</div>
        </div>
    )
}

export default Profil;
