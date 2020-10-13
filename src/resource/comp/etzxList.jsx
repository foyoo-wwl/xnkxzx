import React, { memo, useState, useEffect } from "react";
import "./index.less";
import KjzyCard from "./../../component/kjzxCard";
const EtzxList = memo(props => {
    const { title, ListArr } = props;
    useEffect(() => {
        console.log(ListArr);
    }, []);
    return (
        <div className="common_etzx">
            <div className="ceTitle">{title}</div>
            <div className="list">
                {ListArr.map((item, index) => {
                    return <KjzyCard key={item.id + "=" + index} {...item} />;
                })}
            </div>
        </div>
    );
});

export default EtzxList;
