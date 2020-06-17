import React, { memo } from "react";

import "./index.less";

const Vote = memo(props => {
    const { imgUrl, no, voteNum, rank, id } = props;
    return (
        <div className="shows_comm">
            <div className="shows_img">
                <img src="img/component/active/xnkjg_banner.png" alt="" />
            </div>
            <div className="shows_con">
                <div className="shows_number">
                    作品编号：<span>{no}</span>
                </div>
                <div className="shows_votes">
                    得 票：<span>{voteNum}</span>
                </div>
                <div className="shows_ranking">
                    得票排名：<span>{rank}</span>
                </div>
            </div>
            <div className="showscomm_btn">投我一票</div>
        </div>
    );
});

export default Vote;
