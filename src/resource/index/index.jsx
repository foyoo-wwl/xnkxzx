import React, { memo, useState, useEffect } from "react";
import Mock from "mockjs";
import axios from "axios";
import "./../mock/kpbgspList";
const Resource = memo(() => {
    useEffect(() => {
        axios
            .get("/resource/kpzxsp/list")
            .then(res => {
                console.log(JSON.stringify(res.data));
            })
            .catch(err => {
                console.log(err);
            });
    });
    return (
        <div className="resource_wrap">
            <a href="home.html">home</a>
        </div>
    );
});

export default Resource;
