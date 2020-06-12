import React, { memo } from "react";

const KjzyCard = memo(props => {
    const { title, imgUrl, abstract, link, time, source, id } = props;
    return (
        <div className="kjzy_comm">
            <div className="kjzy_commImg">
                <img src="./img/component/kjzy/kjzzy_banner.png" alt="" />
            </div>
            <div className="kjzy_commCon">
                <a className="kjzy_txt" href={link}>
                    {title}
                </a>
                <div className="kjzy_content">{abstract}</div>
                <div className="kjzy_source">
                    <div className="source">
                        <span>来源：</span>
                        <span>{source}</span>
                    </div>
                    <div className="time">{time}</div>
                </div>
            </div>
        </div>
    );
});

export default KjzyCard;
