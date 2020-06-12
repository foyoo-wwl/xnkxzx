import React, { memo } from "react";

const Title = memo(props => {
    const { imgUrl, title, moreLink } = props;
    return (
        <div className="xnkjg_title">
            <div className="xnkjg_titleL">
                <img src={"./img/component/" + imgUrl} alt="" />
                <span>{title}</span>
            </div>
            <a className="xnkjg_titleR" href={moreLink}>
                <span>更多</span>
                <img src="./img/component/xnkjg/m_icon.png" alt="" />
            </a>
        </div>
    );
});

export default Title;
