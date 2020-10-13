import React, { memo, Fragment, useState, useEffect } from "react";
import { Breadcrumb, Skeleton, Modal, Checkbox, Button, message } from "antd";
import cookie from "react-cookies";
const kxhdCard = memo(props => {
    const {
        title,
        imgUrl,
        no,
        museum,
        country,
        abstract,
        link,
        id,
        filePath,
        linkType,
        articleType,
        typeId,
        isThemes,
        excerpt,
        copylogo,
    } = props;
    const [modalFlag, setModalFlag] = useState(false);
    const [downLink, setDownLink] = useState("");
    const [checkFlag, setCheckFlag] = useState(false);
    const [titleArr, setTitleArr] = useState({
        downBtn: "继续下载",
        downloadTitle: "Copyright Notice",
        downBtns: ["查看", "下载"],
        msg: "请同意《资源使用协议》",
    });
    const modalDown = () => {
        setDownLink(filePath);
        setModalFlag(true);
    };
    const downVideo = () => {
        if (checkFlag) {
            console.log(downLink);
            const aLink = document.createElement("a");
            document.body.appendChild(aLink);
            aLink.style.display = "none";
            aLink.href = downLink;
            aLink.target = "_blank";
            aLink.click();
            document.body.removeChild(aLink);
            setModalFlag(false);
            setCheckFlag(false);
        } else {
            message.info(titleArr.msg);
        }
    };
    const onChange = e => {
        setCheckFlag(e.target.checked);
    };
    useEffect(() => {
        if (cookie.load("_locale") === "en") {
            setTitleArr({
                downBtn: "Download",
                downloadTitle: "Copyright Notice",
                downBtns: ["Learn More", "Download"],
                msg:
                    'You must agree to the "Information Resources Usage Agreement"',
            });
        }
    }, []);
    return (
        <div className="kxhdal_comm">
            <div
                className="kxhdal_img"
                style={{ backgroundImage: "URL(" + imgUrl + ")" }}
            >
                {/* <img src={imgUrl} alt="" /> */}
            </div>
            <div className="kxhdal_mid">
                <div className="kxhdal_txt">{title}</div>
                <div className="kxhdal_mask_content">
                    <span>{excerpt}</span>
                </div>
            </div>
            <div className="kxhdal_r">
                <div className="logo">
                    <img src={window.baseUrl + copylogo} alt="" />
                </div>
                {linkType === 1 ? (
                    <div className="operation">
                        {filePath ? (
                            <a
                                href={"/kjzycontent.html?id=" + id}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {titleArr.downBtns[0]}
                            </a>
                        ) : (
                            <a
                                href={"/content.html?type=2&id=" + id}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {titleArr.downBtns[0]}
                            </a>
                        )}
                        {filePath && (
                            <Fragment>
                                /
                                <div
                                    onClick={modalDown}
                                    download={title}
                                    className="donwLink"
                                >
                                    {titleArr.downBtns[1]}
                                </div>
                            </Fragment>
                        )}
                    </div>
                ) : (
                    <div className="operation">
                        {filePath ? (
                            <Fragment>
                                {isThemes === "2" ? (
                                    <a
                                        href={
                                            "/kjzylist.html?typeid=" +
                                            typeId +
                                            "&parentid=" +
                                            id
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {titleArr.downBtns[0]}
                                    </a>
                                ) : (
                                    <a
                                        href={"/kjzycontent.html?id=" + id}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {titleArr.downBtns[0]}
                                    </a>
                                )}
                            </Fragment>
                        ) : (
                            <Fragment>
                                {isThemes === "2" ? (
                                    <a
                                        href={
                                            "/kjzylist.html?typeid=" +
                                            typeId +
                                            "&type=5" +
                                            "&parentid=" +
                                            id
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {titleArr.downBtns[0]}
                                    </a>
                                ) : (
                                    <a
                                        href={"/content.html?type=5&id=" + id}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {titleArr.downBtns[0]}
                                    </a>
                                )}
                            </Fragment>
                        )}
                        {filePath && (
                            <Fragment>
                                /
                                <div
                                    onClick={modalDown}
                                    download={title}
                                    className="donwLink"
                                >
                                    {titleArr.downBtns[1]}
                                </div>
                            </Fragment>
                        )}
                    </div>
                )}
            </div>
            <Modal
                title={titleArr.downloadTitle}
                visible={modalFlag}
                onCancel={() => setModalFlag(false)}
                footer={null}
            >
                <p> ©2020 Children and Youth Science Center of CAST</p>
                <p>All rights reserved. First Edition 2020. Copyright Notice</p>
                <p>
                    The copyright of this module is owned by Children & Youth
                    Science Center of CAST and only non-exclusive use for
                    non-commercial purposes can be allowed. Deprivative works
                    should be permitted by Children & Youth Science Center of
                    CAST. Any enquiry for further cooperation, please
                    contact yangfeng@cast.org.cn.
                </p>
                <div className="checkWrap">
                    <Checkbox onChange={onChange} checked={checkFlag}>
                        I agree
                    </Checkbox>
                </div>
                <div className="buttonWrap">
                    <Button type="primary" onClick={downVideo}>
                        {titleArr.downBtn}
                    </Button>
                </div>
            </Modal>
        </div>
    );
});
export default kxhdCard;
