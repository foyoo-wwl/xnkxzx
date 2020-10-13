/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo, useState, useEffect } from "react";
import { Modal, Button } from "antd";
import "./common.less";
import cookie from "react-cookies";
const Footer = memo(() => {
    const [aboutFlag, setAboutFlag] = useState(false);
    const [concatFlag, setConcatFlat] = useState(false);
    const [copyFlag, setCopy] = useState(false);
    const [linkArr, setLinkArr] = useState({
        links: ["关于我们", "联系我们", "网站声明"],
        contents: [
            "主办单位：中国科协青少年科技中心",
            "技术服务：”一带一路”国际科学教育协调委员会",
        ],
    });
    useEffect(() => {
        if (cookie.load("_locale") === "en") {
            setLinkArr({
                links: ["About us", "Contact", "Site Policy"],
                contents: [
                    "Organizer：Children & Youth Science Center，China Association for Science and Technology",
                    "Supporter：Belt and Road International Science Education Coordinating Committee",
                ],
            });
        }
    }, []);
    return (
        <div className="footer">
            <div className="footer_bar">
                <a href="/content.html?type=1&id=39&action=2&time=0">
                    {linkArr.links[0]}
                </a>
                <span className="jg">|</span>
                <a href="/content.html?type=1&id=40&action=2&time=0">
                    {linkArr.links[1]}
                </a>
                <span className="jg">|</span>
                <a href="/content.html?type=1&id=41&action=2&time=0">
                    {linkArr.links[2]}
                </a>
            </div>
            <div className="footer_content">
                <div className="footer_nav">
                    <div className="footer_con">
                        <div className="footer_l">
                            <span>{linkArr.contents[0]}</span>
                            <span>{linkArr.contents[1]}</span>
                            <span
                                style={{
                                    width: "400px",
                                    margin: "0 auto",
                                    padding: "20px 0",
                                }}
                            >
                                <a
                                    target="_blank"
                                    href=" "
                                    style={{
                                        display: "inline-block",
                                        textDecoration: "none",
                                        height: "20px",
                                        lineHeight: "20px",
                                    }}
                                >
                                    <p
                                        style={{
                                            float: "left",
                                            height: "20px",
                                            lineHeight: "20px",
                                            margin: " 0px 5px 0px 0px",
                                            color: "#fff",
                                        }}
                                    >
                                        京ICP备12019928号-5
                                    </p>
                                    <img
                                        src="./img/component/footer/footericon.png"
                                        style={{ float: "left" }}
                                    />
                                    <p
                                        style={{
                                            float: "left",
                                            height: "20px",
                                            lineHeight: "20px",
                                            margin: " 0px 0px 0px 5px",
                                            color: "#fff",
                                        }}
                                    >
                                        京公网安备11010802032953号
                                    </p>
                                </a>
                            </span>
                        </div>
                        <div className="footer_r">
                            <img
                                src="./img/component/footer/footer.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                title="About us "
                visible={aboutFlag}
                onCancel={() => setAboutFlag(false)}
                footer={null}
            >
                <h2>
                    Belt and Road Virtual Science Center is a free resource
                    platform jointly built by science education organizations
                    from diverse countries and is mainly operated under the
                    framework of Belt and Road International Science Education
                    Coordinating Committee (BRISECC). We aim to build:
                </h2>
                <p>
                    A joint platform for science education organizations from
                    diverse countries to showcase their resources and conduct
                    external publicity
                </p>
                <p>
                    A shared platform for science teachers and science education
                    organizations in diverse countries to access science and
                    education resources and to improve professional skills
                </p>
                <p>
                    A supporting platform for carrying out thematic S&T
                    activities for teenagers in different countries
                </p>
                <p>
                    An important platform for the public from various countries
                    to learn about the science museums in different countries
                    and to access scientific knowledge.
                </p>
            </Modal>
            <Modal
                title="Contact"
                visible={concatFlag}
                onCancel={() => setConcatFlat(false)}
                footer={null}
            >
                <p>yangfeng@cast.org.cn</p>
                <p>+86（10）68510419</p>
                <p>+86（10）68510419</p>
                <p>
                    Bldg. C China Hall of Science and Technology, No.3 Fuxing
                    Rd.
                </p>
                <p>Beijing 100863,　P. R. China </p>
            </Modal>
            <Modal
                title="Copyright Notice"
                visible={copyFlag}
                onCancel={() => setCopy(false)}
                footer={null}
            >
                <p>
                    The copyright is owned by Children & Youth Science Center of
                    CAST and only non-exclusive use for non-commercial purposes
                    can be allowed. Deprivative works should be permitted by
                    Children & Youth Science Center of CAST. Any enquiry for
                    further cooperation, please contact yangfeng@cast.org.cn.
                </p>
            </Modal>
        </div>
    );
});

export default Footer;
