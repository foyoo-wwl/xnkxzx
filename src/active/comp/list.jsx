/*
 * @Author: your name
 * @Date: 2020-06-11 09:57:51
 * @LastEditTime: 2020-06-11 14:17:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \multi-entry-react-app\src\resource\comp\list.js
 */
import React, { memo } from "react";

import Card from "./card";

import "./index.less";
const CommList = memo(props => {
    const { ListArr, chageTab } = props;
    return (
        <div className="compList">
            {ListArr.map((item, index) => {
                return (
                    <Card
                        chageTab={chageTab}
                        key={item.id + "=" + index}
                        {...item}
                        index={index}
                    />
                );
            })}
        </div>
    );
});

export default CommList;
