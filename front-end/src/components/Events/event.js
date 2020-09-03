import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Eve from "../../images/eve.jpg";

import {
    getEvent
} from "../../_actions/events_actions";
import infos from "../../images/infos.png";

    function EventOne() {
    const dispatch = useDispatch();
    const event = useSelector((state) => state.events.show);
    const { id } = useParams();

    useEffect( () => {
        getEvent({id}).then((data) => dispatch(data));
    }, [id , dispatch]);


    return (
        <div className="article-container">
            <div className="big-square"><h2 className="h1"> - EVENT SIDE </h2></div>
            <div className="details">
                <div className="titles">
                    <div className="images"><img className="infos" src={Eve} alt="more infos" /></div>
                    <div className="square">
                    <h2 className="name tk-ivymode">{event.title}</h2>
                    <p className="description">{event.description}</p>
                    <br/>
                        <span className="color"> {event.region} </span>                    <br />
                    <button className="add-to-cart">
                    <div className="btn-text">Participate</div>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventOne;
