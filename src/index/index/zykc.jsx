/**
 * 资源课程组件
 */
/* eslint-disable no-new */
import React, { memo, useState, useEffect } from "react";

import ZykcCard from "./../../component/zykcCard";
import Title from "./../../component/commonTitle";
import "./index.less";
const Zxkc = memo(props => {
    const { zxkcData } = props;
    useEffect(() => {
        console.log(zxkcData);
    }, []);
    return (
        <div className="zxkcWrap">
            {/* <div className="xnkjgTitle">
                {zxkcData.title}===={zxkcData.moreLink}
            </div> */}
            <Title
                imgUrl={"zykc/zykc_logo.png"}
                title={zxkcData.title}
                moreLink={zxkcData.moreLink}
            />
            <div className="xnkjg_list">
                {zxkcData.list.map(item => {
                    return <ZykcCard {...item} key={item.id} />;
                })}
            </div>
        </div>
    );
});

export default Zxkc;
