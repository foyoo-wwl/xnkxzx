/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from "react";

import "./common.less";
const Footer = memo(() => {
    return (
        <div className="footer">
            <div className="footer_bar">
                <a alt="">关于我们</a>
                <span className="jg">|</span>
                <a alt="">联系我们</a>
                <span className="jg">|</span>
                <a alt="">网站声明</a>
            </div>
            <div className="footer_content">
                <div className="footer_nav">
                    <div className="container">
                        <div className="footer_con">
                            <div className="footer_l">
                                <span>主办单位：中国科协青少年科技中心 </span>
                                <span>
                                    技术服务：”一带一路”国际科学教育协调委员会
                                </span>
                                <span>
                                    备案：京ICP备11018462号-2
                                    京公网安备110108009524号
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
            </div>
        </div>
    );
});

export default Footer;
