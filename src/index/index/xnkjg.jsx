/**
 * 虚拟科技馆组件
 */
/* eslint-disable no-new */
import React, { memo, useState, useEffect } from "react";

import XnkjgCard from "./../../component/xnkjgCard";
import Title from "./../../component/commonTitle";
import "./index.less";
const Xnkjg = memo(props => {
    const { xnkjgData } = props;
    return (
        <div className="xnkjg_section">
            <Title
                imgUrl={"xnkjg/xnkjg_logo.png"}
                title={xnkjgData.title}
                moreLink={xnkjgData.moreLink}
            />
            <div className="xnkjg_list">
                {xnkjgData.list.splice(0, 3).map(item => {
                    return <XnkjgCard {...item} key={item.id} />;
                })}
            </div>
        </div>
    );
});

export default Xnkjg;
