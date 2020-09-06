import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router";
import { showUserProfile } from "../../_actions/user_actions"
import {SERVER_URI} from "../../config";
import moment from "moment";

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
        <div className={"container"}>
            <div className="row">
                <div className="offset-md-2 col-md-8">
                    <div className="card mb-4 shadow-sm">
                        <img src={`${SERVER_URI}${infoUser?.avatar}`} alt={`profil avatar :  ${infoUser?.username}`} className="card-img-top image-responsive" width="100%" height="225" />

                        <div className="card-body">
                            <p className="card-text">
                                <div>{infoUser?.username}</div>
                                <div>
                                    <span>{infoUser?.first_name} {infoUser?.last_name}</span>
                                </div>
                                <div>About me :
                                    <p>{infoUser?.resum}</p>
                                </div>
                            </p>
                            <div>
                                Birthday <small className="text-muted">{moment(infoUser?.birthday?.date).format('YYYY-MM-DD')}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profil;
