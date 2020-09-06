import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {SERVER_URI} from "../../config";
import moment from "moment";

function Me(){
    const infoUser = useSelector((state) => state.user.userInfo);

    return (
        <div className={"container"}>
            <div className="row">
                <div className="offset-md-2 col-md-8">
                    <div className="card mb-4 shadow-sm">
                        <img src={`${SERVER_URI}${infoUser?.avatar}`} alt={`profil avatar :  ${infoUser?.username}`} className="card-img-top image-responsive" width="100%" height="225" />

                        <div>{infoUser?.username}</div>
                        <div>
                            <span>{infoUser?.first_name} {infoUser?.last_name}</span>
                        </div>
                        <div>About me :
                            <p>{infoUser?.resum}</p>
                        </div>

                        <div>
                            Birthday <small className="text-muted">{moment(infoUser?.birthday?.date).format('YYYY-MM-DD')}</small>
                        </div>
                        <Link to={"/me/update"} className="btn btn-primary"> Update </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Me;
