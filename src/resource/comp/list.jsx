/*
 * @Author: your name
 * @Date: 2020-06-11 09:57:51
 * @LastEditTime: 2020-06-12 16:18:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \multi-entry-react-app\src\resource\comp\list.js
 */
import React, { memo } from "react";

import KjzyCard from "./../../component/kjzxCard";

import "./index.less";
const CommList = memo(props => {
    const { ListArr } = props;
    return (
        <div className="compList">
            {ListArr.map((item, index) => {
                return <KjzyCard key={item.id + "=" + index} {...item} />;
            })}
        </div>
    );
});

export default CommList;
