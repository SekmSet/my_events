import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import {
    getEvents
} from "../../_actions/events_actions";


function EventOne() {
    let { id } = useParams();
    const dispatch = useDispatch();
    const event = useSelector((state) => state.events);

    useEffect( () => {
        getEvents({ id }).then((data) => dispatch(data));
    })


    return (
        <div className="">
            {console.log("coucou je suis l'event solo")}
        </div>
    );
}

export default EventOne;
