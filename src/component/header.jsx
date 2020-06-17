/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo, useState, useRef, useEffect } from "react";

import "./common.less";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Menu, Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";
const { SubMenu } = Menu;
const Header = memo(props => {
    const { Search } = Input;
    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: "#1890ff",
            }}
        />
    );
    const [menuFlag, setMenuFlag] = useState(false);
    //const menuFlag = useRef(false)
    const toggleMenu = () => {
        if (menuFlag) {
            setMenuFlag(false);
        } else {
            setMenuFlag(true);
        }
    };
    useEffect(() => {
        console.log(window.location.href);
    }, []);
    const handleClick = () => {
        setMenuFlag(false);
    };
    const searchKeyWord = value => {
        console.log(value);
    };
    return (
        <div className="headerWrap">
            <div className="header">
                <div className="container header_nav">
                    <div className="logo_wrap">
                        <a className="logo" href="/index.html">
                            <img src="./img/component/header/logo.png" alt="" />
                        </a>
                        <div className="m_menu" onClick={toggleMenu}>
                            <svg
                                t="1592188658894"
                                className="icon"
                                viewBox="0 0 1024 1024"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                p-id="2674"
                                width="64"
                                height="64"
                            >
                                <path
                                    d="M332.6 468.9h582c24.7 0 44.8 20 44.8 44.8 0 24.7-20 44.8-44.8 44.8h-582c-24.7 0-44.8-20-44.8-44.8 0-24.7 20-44.8 44.8-44.8zM108.7 468.9h44.8c24.7 0 44.8 20 44.8 44.8 0 24.7-20 44.8-44.8 44.8h-44.8c-24.7 0-44.8-20-44.8-44.8 0.1-24.7 20.1-44.8 44.8-44.8zM108.7 737.5h805.8c24.7 0 44.8 20 44.8 44.8 0 24.7-20 44.8-44.8 44.8H108.7C84 827.1 64 807 64 782.3c0-24.7 20-44.8 44.7-44.8zM108.7 200.3h805.8c24.7 0 44.8 20 44.8 44.8 0 24.7-20 44.8-44.8 44.8H108.7c-24.7 0-44.8-20-44.8-44.8 0.1-24.7 20.1-44.8 44.8-44.8z"
                                    fill="#0268D1"
                                    p-id="2675"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <div className="header_right_wrap">
                        <div className="search">
                            <Search
                                placeholder="请输入搜索内容"
                                onSearch={searchKeyWord}
                                enterButton
                                className="searchIpt"
                            />
                            {/* <div className="search_btn">
                                <img
                                    src="./img/component/header/search.png"
                                    alt=""
                                />
                            </div> */}
                        </div>
                        <div className="header_right">
                            <a className="login">登录</a>
                            <span></span>
                            <a className="register">注册</a>
                            <a className="english">
                                <img
                                    src="./img/component/header/en.png"
                                    alt=""
                                />
                            </a>
                        </div>
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
            {menuFlag && (
                <div className="menuWrap">
                    <Menu
                        onClick={handleClick}
                        style={{ width: 256 }}
                        // defaultSelectedKeys={["0"]}
                        // defaultOpenKeys={[""]}
                        mode="inline"
                    >
                        <Menu.Item key="0">
                            <a className="top_link" href="/index.html">
                                首页
                            </a>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={
                                <a className="top_link" href="/museum.html">
                                    虚拟科技馆
                                </a>
                            }
                        >
                            <Menu.Item key="1">
                                <a
                                    className="select_txt"
                                    href="/museum.html#/xncg"
                                >
                                    虚拟场馆
                                </a>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <a
                                    className="select_txt"
                                    href="/museum.html#/zxkjzx"
                                >
                                    在线科技展项
                                </a>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <a
                                    className="select_txt"
                                    href="/museum.html#/kxhd"
                                >
                                    科学活动
                                </a>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub4"
                            title={
                                <a className="top_link" href="/resource.html">
                                    科教资源
                                </a>
                            }
                        >
                            <Menu.Item key="11">
                                <a className="select_txt" href="/resource.html">
                                    儿童在线学习资源
                                </a>
                            </Menu.Item>
                            <Menu.Item key="12">
                                <a
                                    className="select_txt"
                                    href="/resource.html#/kpbg"
                                >
                                    科普报告视频
                                </a>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub5"
                            title={
                                <a className="select_txt" href="/active.html">
                                    活动专题
                                </a>
                            }
                        >
                            <Menu.Item key="9">
                                <a className="select_txt" href="/active.html">
                                    活动专题
                                </a>
                            </Menu.Item>
                            <Menu.Item key="10">
                                <a
                                    className="select_txt"
                                    href="/active.html#/previous"
                                >
                                    往期专题
                                </a>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
            )}
        </div>
    );
});

export default Header;
