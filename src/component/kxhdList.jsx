import React, { memo, useState, useEffect, useCallback } from "react";

import KxhdCard from "./kxhdCard";

// import "./index.less";
const CommList = memo(props => {
    const { ListArr, link } = props;
    return (
        <div className="compList">
            {ListArr.map((item, index) => {
                return (
                    <KxhdCard
                        key={item.id + "=" + index}
                        {...item}
                        linkType={link}
                    />
                );
            })}
        </div>
    );
});

export default CommList;
