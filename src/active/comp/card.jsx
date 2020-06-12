import React, { memo } from "react";

import "./index.less";
import { NavLink } from "react-router-dom";
const Card = memo(props => {
    const {
        imgUrl,
        abstract,
        specialId,
        time,
        rule,
        resources,
        tab,
        chageTab,
        index,
    } = props;
    return (
        <div className="card">
            <div className="imgWrap">{imgUrl}</div>
            <div className="cardContent">
                <div className="h1">{abstract}</div>
                <div className="h1">
                    {time}=={specialId}
                </div>
            </div>
            <div className="cardTab">
                <h2>
                    <NavLink to={"/detail/" + specialId}>详情</NavLink>
                </h2>
                <div className="tabbtns">
                    <button onClick={() => chageTab(index, 1)}>活动规则</button>
                    <button onClick={() => chageTab(index, 0)}>学习资源</button>
                </div>
                <div className="resource">
                    {tab === 1 ? (
                        <div className="ruleWrap">
                            <h1>{rule.ruleTitle}</h1>
                            <p>{rule.rulesDesc}</p>
                        </div>
                    ) : (
                        <div className="resourceWrap">
                            <h2>{resources.title}</h2>
                            <u>
                                {resources.resourcesList.list.map(item => {
                                    return (
                                        <li key={item.id + "=" + item.path}>
                                            {item.title}
                                        </li>
                                    );
                                })}
                            </u>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
});

export default Card;
