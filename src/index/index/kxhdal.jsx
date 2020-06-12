/**
 * 科学活动案例组件
 */
/* eslint-disable no-new */
import React, { memo, useState, useEffect } from "react";
import KxhdalCard from "./../../component/kxhdalCard";
import Title from "./../../component/commonTitle";
import "./index.less";
const Kxhdal = memo(props => {
    const { kxhdalData } = props;
    return (
        <div className="kxhdalWrap">
            <Title
                imgUrl={"kxhdal/kxhdal_logo.png"}
                title={kxhdalData.title}
                moreLink={kxhdalData.moreLink}
            />
            <div className="xnkjg_list">
                {kxhdalData.list.map(item => {
                    return <KxhdalCard key={item.id} {...item} />;
                })}
            </div>
        </div>
    );
});

export default Kxhdal;
