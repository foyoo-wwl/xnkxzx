import React, { memo, useState, useEffect } from "react";
import "./index.less";
import Card from "./commCard";
import Title from "./../../component/commonTitle";
const CommList = memo(props => {
    const { listArr, title, link, icon } = props;
    return (
        <div className="commList">
            <Title imgUrl={icon} title={title} moreLink={link} />
            <div className="listContent">
                {listArr.map(item => {
                    return <Card {...item} key={item.id} />;
                })}
            </div>
        </div>
    );
});
export default CommList;
