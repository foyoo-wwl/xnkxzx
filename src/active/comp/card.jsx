import React, { memo, Fragment } from "react";

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
        title,
    } = props;
    return (
        <div className="activeCard">
            <div className="activeTop">
                <div className="imgWrap">
                    <img src="./img/component/active/wqhd.png" alt="" />
                </div>
                <div className="topContent">
                    <div className="title">{title}</div>
                    <div className="abstract">{abstract}</div>
                    <div className="more">
                        <a href="www.baidu.com">更多&gt;&gt;</a>
                    </div>
                    <div className="time">{time}</div>
                    <div className="btnWrap">
                        <div className="tabbtns">
                            <div
                                className={tab === 1 ? "activeBtn" : ""}
                                onClick={() => chageTab(index, 1)}
                            >
                                活动规则
                            </div>
                            <div
                                className={tab === 2 ? "activeBtn" : ""}
                                onClick={() => chageTab(index, 2)}
                            >
                                学习资源
                            </div>
                        </div>
                        <div className="goDetail">
                            <NavLink to={"/detail/" + specialId}>
                                点击进入
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cardTab">
                {tab === 1 ? (
                    <div className="ruleWrap">
                        <div className="title">{rule.ruleTitle}</div>
                        <div className="desc">{rule.rulesDesc}</div>
                    </div>
                ) : tab === 2 ? (
                    <div className="resourceWrap">
                        <div className="title">{resources.title}</div>
                        <ul>
                            {resources.resourcesList.list.map(item => {
                                return (
                                    <a key={item.id + "=" + item.path} href="1">
                                        {item.title}
                                    </a>
                                );
                            })}
                        </ul>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
});

export default Card;
