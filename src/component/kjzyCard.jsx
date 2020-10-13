/* eslint-disable no-underscore-dangle */
import React, { memo } from "react";
import { NavLink } from "react-router-dom";
const KjzyCard = memo(props => {
    const {
        title,
        imgUrl,
        abstract,
        link,
        time,
        source,
        id,
        seriesType,
        sourceTitle,
    } = props;
    const type = parseInt(props.seriesType, 0);
    const t1 = "/resource.html#/detail/";
    const t2 = "/resource.html#/detaillist/";
    return (
        <div className="kjzy_comm_index">
            <div
                className="kjzy_commImg"
                style={{ backgroundImage: "url(" + imgUrl + ")" }}
            ></div>
            <div className="kjzy_commCon">
                <a
                    className="kjzy_txt"
                    href={type === 1 ? t1 + id : t2 + id}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {title}
                </a>
                {/* <div className="kjzy_content">{abstract}</div> */}
                {/* <div className="kjzy_source">
                    <div className="source">
                        <span>{sourceTitle}：</span>
                        <span>{source}</span>
                    </div>
                    <div className="time">
                        {new Date(parseInt(time, 0) * 1000)
                            .toLocaleString()
                            .replace(/:\d{1,2}$/, " ")}
                    </div>
                </div> */}
            </div>
        </div>
    );
});

export default KjzyCard;
