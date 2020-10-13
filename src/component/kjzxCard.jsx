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
    } = props;
    const type = parseInt(props.seriesType, 0);
    const t1 = "/detail/";
    const t2 = "/detaillist/";
    return (
        <div className="kjzy_comm_source">
            <div
                className="kjzy_commImg"
                style={{ backgroundImage: "url(" + imgUrl + ")" }}
            ></div>

            <div className="kjzy_commCon">
                <NavLink
                    className="kjzy_txt"
                    to={type === 1 ? t1 + id : t2 + id}
                >
                    {title}
                </NavLink>
                <div className="kjzy_content">{abstract}</div>
                {/* <div className="kjzy_source">
                    <div className="source">
                        <span>来源：</span>
                        <span>{source}</span>
                    </div>
                    <div className="time">{time}</div>
                </div> */}
            </div>
        </div>
    );
});

export default KjzyCard;
