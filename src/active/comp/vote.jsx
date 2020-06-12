import React, { memo } from "react";

import "./index.less";

const Vote = memo(props => {
    const { imgUrl, no, voteNum, rank, id } = props;
    return (
        <div className="voteSec">
            <h3>{imgUrl}</h3>
            <h3>{no}</h3>
            <h3>{voteNum}</h3>
            <h3>{rank}</h3>
            <h3>{id}</h3>
        </div>
    );
});

export default Vote;
