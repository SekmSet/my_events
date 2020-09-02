import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";


import {
    getEvent
} from "../../_actions/events_actions";

    function EventOne() {
    const dispatch = useDispatch();
    const event = useSelector((state) => state.events.show);
    const { id } = useParams();

    useEffect( () => {
        getEvent({id}).then((data) => dispatch(data));
    }, [id , dispatch]);
    return (
        <div className="article-container">
            <h2 className="tk-ivymode"> - EVENT SIDE </h2>
            <div className="details">
                <div className="titles">
                    <h2 className="name tk-ivymode">{event.title}</h2>
                    <span className="color"> {event.region} </span> <br/>
                    <span className="color"> {event.address} </span>
                </div>
                <p className="description">{event.description}</p>
                <br />
            </div>
        </div>
    );
}

export default EventOne;
