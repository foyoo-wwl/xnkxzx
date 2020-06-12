/**
 * 资源课程组件
 */
/* eslint-disable no-new */
import React, { memo, useState, useEffect } from "react";
import KjzyCard from "./../../component/kjzxCard";
import "./index.less";
import Title from "./../../component/commonTitle";
const Kjzy = memo(props => {
    const { kjztData } = props;
    useEffect(() => {
        console.log(kjztData);
    }, []);
    return (
        <div className="kjzyWrap">
            <Title
                imgUrl={"kjzy/kjzy_logo.png"}
                title={kjztData.title}
                moreLink={kjztData.moreLink}
            />
            <div className="xnkjg_list">
                {kjztData.list.map(item => {
                    return <KjzyCard {...item} key={item.id} />;
                })}
            </div>
        </div>
    );
});

export default Kjzy;
