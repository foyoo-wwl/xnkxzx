import React, { memo, useState, useEffect, useCallback } from "react";

import Card from "./../index/commCard";

import "./index.less";
const CommList = memo(props => {
    const { ListArr } = props;
    return (
        <div className="compList">
            {ListArr.map((item, index) => {
                return <Card key={item.id + "=" + index} {...item} />;
            })}
        </div>
    );
});

export default CommList;
