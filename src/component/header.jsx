/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from "react";

import "./common.less";
const Header = memo(() => {
    return (
        <div className="headerWrap">
            <div className="header">
                <div className="container header_nav">
                    <a className="logo">
                        <img src="./img/component/header/logo.png" alt="" />
                    </a>
                    <div className="search">
                        <div className="search_btn">
                            <img
                                src="./img/component/header/search.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="header_right">
                        <a className="login">登录</a>
                        <span></span>
                        <a className="register">注册</a>
                        <a className="english">
                            <img src="./img/component/header/en.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="navigation">
                <div className="container navigation_con">
                    <div className="nav_comm active">
                        <div className="nav_tab">
                            <a className="top_link" href="/index.html">
                                首页
                            </a>
                        </div>
                    </div>
                    <div className="nav_comm">
                        <div className="nav_tab">
                            <a className="top_link" href="/museum.html">
                                虚拟科技馆
                                <span>
                                    <img
                                        src="./img/component/header/jt.png"
                                        alt=""
                                    />
                                </span>
                            </a>
                            <div className="nav_select nav_select1">
                                <a
                                    className="select_txt"
                                    href="/museum.html#/xncg"
                                >
                                    虚拟场馆
                                </a>
                                <a
                                    className="select_txt"
                                    href="/museum.html#/zxkjzx"
                                >
                                    在线科技展项
                                </a>
                                <a
                                    className="select_txt"
                                    href="/museum.html#/kxhd"
                                >
                                    科学活动
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="nav_comm">
                        <div className="nav_tab">
                            <div className="top_link">
                                专业课程
                                <span>
                                    <img
                                        src="./img/component/header/jt.png"
                                        alt=""
                                    />
                                </span>
                            </div>
                            <div className="nav_select nav_select1">
                                <a className="select_txt">教师培训</a>
                            </div>
                        </div>
                    </div>
                    <div className="nav_comm">
                        <div className="nav_tab">
                            <a className="top_link" href="/resource.html">
                                科教资源
                                <span>
                                    <img
                                        src="./img/component/header/jt.png"
                                        alt=""
                                    />
                                </span>
                            </a>
                            <div className="nav_select nav_select1">
                                <a className="select_txt" href="/resource.html">
                                    儿童在线学习资源
                                </a>
                                <a
                                    className="select_txt"
                                    href="/resource.html#/kpbg"
                                >
                                    科普报告视频
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="nav_comm">
                        <div className="nav_tab">
                            <a className="top_link" href="/active.html">
                                主题活动
                                <span>
                                    <img
                                        src="./img/component/header/jt.png"
                                        alt=""
                                    />
                                </span>
                            </a>
                            <div className="nav_select nav_select1">
                                <a className="select_txt" href="/active.html">
                                    活动专题
                                </a>
                                <a
                                    className="select_txt"
                                    href="/active.html#/previous"
                                >
                                    往期专题
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Header;
