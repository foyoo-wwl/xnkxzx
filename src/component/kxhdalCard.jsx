import React, { memo } from "react";

const KxhdalCard = memo(props => {
    const {
        title,
        imgUrl,
        no,
        museum,
        country,
        abstract,
        link,
        id,
        language,
        filePath,
        isThemes,
        typeId,
    } = props;
    const getHref = () => {
        let url = "";
        if (filePath) {
            if (parseInt(isThemes, 10) === 2) {
                url = "/kjzycontent.html?id=" + id;
            } else {
                url = "/content.html?type=2&id=" + id;
            }
        } else if (!filePath) {
            if (parseInt(isThemes, 10) === 2) {
                url =
                    "/kjzylist.html?typeid=" +
                    typeId +
                    "&type=5" +
                    "&parentid=" +
                    id;
            } else {
                url = "/content.html?type=5&id=" + id;
            }
        }
        return url;
    };
    return (
        <a className="kxhdal_comm" href={getHref()}>
            <div className="kxhdal_img">
                <img src={imgUrl} alt="" />
            </div>
            {/* <div className="kxhdal_G">
                <div className="box1"></div>
                <div className="box2"></div>
                <div className="kxhdal_Gtext">{no}</div>
            </div>
            <div className="kxhdal_mask">
                <div className="kxhdal_mask_nav">
                    <div className="kxhdal_txt">{title}</div>
                    <div className="kxhdal_address">
                        <span className="country">{country}</span>
                        <span className="nation">{museum}</span>
                    </div>
                    <div className="kxhdal_mask_content">
                        <span>{abstract}</span>
                        <a
                            href={"./kjzylist.html?typeid=60&parentid=" + id}
                            alt={title}
                        >
                            {language === "en" ? "more" : "更多"}
                        </a>
                    </div>
                </div>
            </div> */}
            <div className="kxhdal_content">
                <div className="title">{title}</div>
                <div className="abstract" style={{ color: "#6b7580" }}>
                    {abstract}
                </div>
            </div>
        </a>
    );
});

export default KxhdalCard;
