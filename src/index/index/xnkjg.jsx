/**
 * 虚拟科技馆组件
 */
/* eslint-disable no-new */
import React, { memo, useState, useEffect } from "react";
import { axiosGet } from "./../../utils/axios";
import cookie from "react-cookies";
import XnkjgCard from "./../../component/xnkjgCard";
import Title from "./../../component/commonTitle";
import "./index.less";
const Xnkjg = memo(props => {
    const { xnkjgData, language } = props;
    const [title, setTitle] = useState();
    useEffect(() => {
        if (language === "en") {
            setTitle("Virtual Science Museum");
        } else {
            setTitle(xnkjgData.title);
        }
    }, []);
    const goPath = (id, path) => {
        axiosGet(
            window.baseUrl +
                "/api/myaction?type=2" +
                "&objectId=" +
                id +
                "&userId=" +
                cookie.load("uuid")
        ).then(res => {
            window.open(path);
        });
    };
    return (
        <div className="xnkjg_section">
            <Title
                imgUrl={"xnkjg/xnkjg_logo.png"}
                title={title}
                moreLink="/museum.html"
                language={language}
            />
            <div className="xnkjg_list">
                {xnkjgData.list.map(item => {
                    return (
                        <XnkjgCard
                            {...item}
                            key={item.id}
                            type={2}
                            goPath={goPath}
                        />
                    );
                })}
            </div>
        </div>
    );
});

export default Xnkjg;
