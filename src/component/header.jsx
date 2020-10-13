/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo, useState, useRef, useEffect, Fragment } from "react";

import "./common.less";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Menu, Input, Drawer } from "antd";
import cookie from "react-cookies";
import { axiosGetToken, axiosGet } from "./../utils/axios";
import classNames from "classnames";
import axios from "axios";
const { SubMenu } = Menu;
const Header = memo(props => {
    const { Search } = Input;
    const [adminFlag, setAdminFlag] = useState(false);
    const [menuFlag, setMenuFlag] = useState(false);
    const [msgFlag, setMsgFlag] = useState(0);
    const [useFlag, setUserFlag] = useState(false);
    const [noLoginFlag, setNoLoginFlag] = useState(false);
    const [loginFlag, setLoginFlag] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [cnArr, setCnarr] = useState({
        search: "搜索",
        admin: ["管理后台", "我的教学", "个人中心"],
        msg: {
            notice: "通知",
            letter: "私信",
            nomoreNotice: "暂无新的通知~",
            nomoreLetter: "暂无新的私信~",
            seeMore: "查看全部通知",
            seeMoreNotice: "查看全部通知",
            seeMoreLetter: "查看全部私信",
        },
        user: {
            exit: "退出登录",
            username: "账号中心",
            setting: "个人设置",
        },
        menu: [
            {
                title: "首页",
                listMenu: ["虚拟场馆", "在线科技展项", "科学活动"],
            },
            {
                title: "虚拟科技馆",
                listMenu: ["虚拟场馆", "在线科技展项", "科学活动"],
            },
            {
                title: "专业课程",
                listMenu: ["在线培训", "科教资源", "科学活动"],
            },
            {
                title: "学生专区",
                listMenu: ["科教课程", "科普报告视频"],
            },
            {
                title: "主题活动",
                listMenu: ["活动专题", "往期专题"],
            },
        ],
        loginList: [
            "账户中心",
            "个人设置",
            "管理后台",
            "个人中心",
            "我的教学",
            "通知",
            "私信",
            "中文",
            "English",
            "退出登录",
        ],
        noLoginList: ["登录", "注册", "中文", "English"],
        notifacation: ["通知", "系统消息"],
    });
    const [adminShowArr, setAdminShowArr] = useState([0, 0, 0]);
    const [userArr, setUserArr] = useState({
        nickname: "测试管理员",
        avatar: {
            large:
                window.baseUrl +
                "/files/user/2020/07-08/1024375dfd98561145.jpg",
            small:
                window.baseUrl +
                "/files/default/2020/06-14/150652c5ea22635874.jpg",
        },
        roles: ["ROLE_USER", "ROLE_TEACHER", "ROLE_SUPER_ADMIN"],
    });
    const [adminType, setAdminType] = useState(2);
    const [notiArr, setNotiarr] = useState([]);
    //const menuFlag = useRef(false)
    const toggleMenu = () => {
        if (menuFlag) {
            setMenuFlag(false);
        } else {
            setMenuFlag(true);
        }
    };
    // 中英文切换
    useEffect(() => {
        const en = {
            search: "search",
            admin: ["Admin", "My Teaching", "Personal Center"],
            msg: {
                notice: "Notifications",
                letter: "Messages",
                nomoreNotice: "No new notification",
                nomoreLetter: "No new message",
                seeMore: "View all notifications",
                seeMoreNotice: "View all notifications",
                seeMoreLetter: "View all messages",
            },
            user: {
                exit: "Log Out",
                username: "Account Settings",
                setting: "Profile",
            },
            menu: [
                {
                    title: "Home",
                },
                {
                    title: "Virtual Science Museum",
                    listMenu: [
                        "Virtual Tour",
                        "Online Exhibits",
                        "Science Activities",
                    ],
                },
                {
                    title: "Professional Learning",
                    listMenu: ["Online Training", "Teaching Resources"],
                },
                {
                    title: "For Students",
                    listMenu: ["Science Courses", "Video Lectures"],
                },
                {
                    title: "Thematic Activities",
                    listMenu: ["Activity Theme", "Previous Activities"],
                },
            ],
            loginList: [
                "Account",
                "Profile Settings",
                "Admin",
                "My Teaching",
                "Personal Center",
                "Notifications",
                "Messages",
                "Chinese (Simplified)",
                "English",
                "Log Out",
            ],
            noLoginList: [
                "Log In",
                "Sign Up",
                "Chinese (Simplified)",
                "English",
            ],
        };
        // cookie.save("_locale", "en");
        if (cookie.load("_locale") === "en") {
            setCnarr(en);
        }
    }, []);
    const handleClick = () => {
        setMenuFlag(false);
    };
    //搜索
    const searchKeyWord = value => {
        window.location.href = "./search?q=" + value;
    };
    const urlHtmlPath = () => {
        //获取url地址
        let ts_href = window.location.href;
        var string = ts_href;
        var url = new URL(string);
        var result = url.pathname.replace(/\/$/, "") + window.location.hash;
        return result;
    };
    const toggleAdmin = e => {
        setAdminFlag(!adminFlag);
    };
    const toggleMsg = e => {
        e.nativeEvent.stopImmediatePropagation();
        if (msgFlag > 0) {
            setMsgFlag(0);
        } else {
            setMsgFlag(1);
        }
    };
    const toggleUser = e => {
        e.nativeEvent.stopImmediatePropagation();
        if (useFlag) {
            setUserFlag(false);
        } else {
            setUserFlag(true);
        }
    };
    const drawerClose = e => {
        e.nativeEvent.stopImmediatePropagation();
        setMenuFlag(false);
    };
    const toggleNoLogin = e => {
        e.nativeEvent.stopImmediatePropagation();
        if (noLoginFlag) {
            setNoLoginFlag(false);
        } else {
            setNoLoginFlag(true);
        }
    };
    const toggleLoginFlag = e => {
        e.nativeEvent.stopImmediatePropagation();
        if (loginFlag) {
            setLoginFlag(false);
        } else {
            setLoginFlag(true);
        }
    };
    const closeAlert = e => {
        // e.nativeEvent.stopImmediatePropagation();
        //setAdminFlag(false);
    };
    useEffect(() => {
        document.onclick = () => {
            setAdminFlag(false);
            setMsgFlag(0);
            setUserFlag(false);
        };
    });
    const openAdmin = e => {
        e.nativeEvent.stopImmediatePropagation();
        toggleAdmin();
    };
    // 获取token登录信息
    useEffect(() => {
        axiosGet(window.baseUrl + "/online/token")
            .then(res => {
                if (res) {
                    axiosGetToken(res, window.baseUrl + "/api/me").then(
                        res2 => {
                            setUserArr(res2);
                            changeAdminArr(res2.roles);
                            cookie.save("uuid", res2.id);
                        }
                    );
                    // notifitcation
                    axiosGetToken(
                        res,
                        window.baseUrl + "/api/notificationv2"
                    ).then(res2 => {
                        console.log(res2.data);
                        setNotiarr(res2.data);
                    });
                } else {
                    cookie.save("uuid", 0);
                    setIsLogin(false);
                }
            })
            .catch(err => {
                setIsLogin(false);
                cookie.save("uuid", 0);
            });
    }, []);
    const changeAdminArr = arr => {
        const _arr = [0, 0, 0];
        arr.map(item => {
            if (item === "ROLE_USER") {
                _arr[2] = 1;
                setAdminType(1);
            }
            if (item === "ROLE_TEACHER") {
                _arr[1] = 1;
                setAdminType(2);
            }
            if (item === "ROLE_SUPER_ADMIN") {
                _arr[0] = 1;
                setAdminType(3);
            }
        });
        setAdminShowArr(_arr);
    };
    const tabCls = classNames({ a1: msgFlag === 1, tab: msgFlag !== 1 });
    const tabCls2 = classNames({ a2: msgFlag === 2, tab: msgFlag !== 2 });

    return (
        <div className="headerWrap">
            <div className="header">
                <div className="container header_nav">
                    <div className="logo_wrap">
                        <div className="m_menu" onClick={toggleMenu}>
                            <svg
                                t="1592729069640"
                                className="icon"
                                viewBox="0 0 1024 1024"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                p-id="2127"
                                width="16"
                                height="16"
                            >
                                <path
                                    d="M896 307.2l-768 0c-14.1312 0-25.6-11.4688-25.6-25.6s11.4688-25.6 25.6-25.6l768 0c14.1312 0 25.6 11.4688 25.6 25.6s-11.4688 25.6-25.6 25.6z"
                                    p-id="2128"
                                ></path>
                                <path
                                    d="M896 563.2l-768 0c-14.1312 0-25.6-11.4688-25.6-25.6s11.4688-25.6 25.6-25.6l768 0c14.1312 0 25.6 11.4688 25.6 25.6s-11.4688 25.6-25.6 25.6z"
                                    p-id="2129"
                                ></path>
                                <path
                                    d="M896 819.2l-768 0c-14.1312 0-25.6-11.4688-25.6-25.6s11.4688-25.6 25.6-25.6l768 0c14.1312 0 25.6 11.4688 25.6 25.6s-11.4688 25.6-25.6 25.6z"
                                    p-id="2130"
                                ></path>
                            </svg>
                        </div>
                        <a className="logo" href="/index.html">
                            <img src="./img/component/header/logo.png" alt="" />
                        </a>
                        {!isLogin && (
                            <div className="avatar">
                                <img
                                    src={
                                        window.baseUrl +
                                        "/assets/img/default/avatar.png?version=8.7.3"
                                    }
                                    alt=""
                                    onClick={toggleNoLogin}
                                />
                                {/* 移动端未登录 */}
                                {noLoginFlag && (
                                    <div className="noLoginWrap">
                                        <li className="user-nav-li-login">
                                            <a href="./login?goto=http%3A//edusoho.yanmeiculture.com/course/v2/explore">
                                                <i className="es-icon es-icon-denglu">
                                                    <svg
                                                        t="1592790803319"
                                                        className="icon"
                                                        viewBox="0 0 1024 1024"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        p-id="14271"
                                                        width="16"
                                                        height="16"
                                                    >
                                                        <path
                                                            d="M960.853333 903.816533a463.633067 463.633067 0 0 0-11.264-39.185066c-1.536-4.539733-3.413333-8.942933-5.051733-13.448534a484.078933 484.078933 0 0 0-9.557333-24.4736c-2.2528-5.188267-4.881067-10.274133-7.338667-15.394133-3.413333-7.099733-6.8608-14.165333-10.6496-21.0944-2.901333-5.3248-6.075733-10.513067-9.181867-15.701333-2.423467-4.061867-4.573867-8.226133-7.133866-12.219734-1.604267-2.4576-3.413333-4.778667-5.0176-7.202133-1.501867-2.218667-2.730667-4.608-4.266667-6.792533-0.4096-0.6144-1.058133-0.887467-1.501867-1.4336a461.482667 461.482667 0 0 0-90.385066-96.768c-13.5168-10.786133-27.7504-20.48-42.257067-29.5936-0.477867-0.341333-0.7168-0.8192-1.194667-1.1264-3.6864-2.286933-7.509333-4.3008-11.264-6.485334-4.266667-2.491733-8.4992-5.051733-12.868266-7.441066-6.826667-3.6864-13.789867-7.099733-20.753067-10.478934-3.618133-1.7408-7.202133-3.618133-10.8544-5.290666a449.194667 449.194667 0 0 0-31.607467-12.731734c-0.7168-0.273067-1.365333-0.6144-2.082133-0.8192-3.140267-1.1264-6.417067-1.911467-9.557333-2.935466-4.164267-1.399467-8.328533-2.833067-12.561067-4.096a259.9936 259.9936 0 0 0 129.194667-225.450667 260.061867 260.061867 0 0 0-76.629334-185.002667 259.9936 259.9936 0 0 0-185.002666-76.629333H512h-0.034133a259.857067 259.857067 0 0 0-185.002667 76.629333 259.925333 259.925333 0 0 0-76.629333 185.002667 259.584 259.584 0 0 0 76.629333 185.002667c15.906133 15.940267 33.655467 29.2864 52.565333 40.448-4.266667 1.262933-8.430933 2.730667-12.663466 4.096-3.140267 1.058133-6.3488 1.8432-9.489067 2.935466-0.7168 0.238933-1.365333 0.580267-2.048 0.8192-10.683733 3.822933-21.265067 8.0896-31.675733 12.765867-3.584 1.604267-7.0656 3.4816-10.615467 5.154133-7.099733 3.413333-14.165333 6.826667-21.0944 10.615467-4.266667 2.321067-8.3968 4.8128-12.561067 7.2704-3.822933 2.218667-7.748267 4.266667-11.502933 6.621867-0.512 0.3072-0.750933 0.8192-1.2288 1.160533-14.506667 9.147733-28.706133 18.807467-42.222933 29.559467a459.6736 459.6736 0 0 0-90.385067 96.768c-0.443733 0.546133-1.092267 0.8192-1.501867 1.4336-1.536 2.184533-2.7648 4.573867-4.266666 6.792533-1.604267 2.423467-3.447467 4.744533-5.0176 7.202133-2.56 3.9936-4.7104 8.157867-7.133867 12.219734-3.106133 5.188267-6.280533 10.376533-9.181867 15.701333-3.7888 6.929067-7.202133 13.994667-10.6496 21.0944-2.4576 5.12-5.051733 10.205867-7.338666 15.394133-3.515733 8.021333-6.519467 16.247467-9.557334 24.4736-1.672533 4.5056-3.549867 8.9088-5.051733 13.448534-4.3008 12.868267-8.0896 25.941333-11.264 39.185066-3.072 12.970667 2.594133 25.770667 13.073067 32.802134a31.3344 31.3344 0 0 0 9.966933 4.608 30.9248 30.9248 0 0 0 34.030933-15.2576 30.446933 30.446933 0 0 0 3.345067-7.7824c2.833067-11.844267 6.178133-23.483733 10.0352-34.9184 0.6144-1.8432 1.399467-3.549867 2.013867-5.358934 3.447467-9.762133 7.133867-19.456 11.332266-28.945066 0.512-1.160533 1.1264-2.2528 1.6384-3.447467 4.7104-10.308267 9.728-20.48 15.291734-30.344533l0.068266-0.1024a402.773333 402.773333 0 0 1 19.694934-31.4368l0.136533-0.375467a397.4144 397.4144 0 0 1 116.599467-111.2064c0.136533-0.1024 0.3072-0.068267 0.443733-0.170667a397.824 397.824 0 0 1 94.993067-42.973866c2.7648-0.8192 5.495467-1.7408 8.2944-2.491734 5.7344-1.604267 11.5712-3.003733 17.373866-4.334933a367.8208 367.8208 0 0 1 47.342934-7.953067c3.8912-0.443733 7.7824-0.9216 11.6736-1.2288 10.410667-0.785067 20.8896-1.3312 31.505066-1.3312s21.060267 0.546133 31.505067 1.3312c3.8912 0.3072 7.816533 0.785067 11.707733 1.2288a361.3696 361.3696 0 0 1 47.240534 7.953067c5.870933 1.3312 11.707733 2.730667 17.5104 4.334933 2.696533 0.750933 5.358933 1.6384 8.021333 2.4576 33.348267 10.103467 65.365333 24.405333 95.197867 43.008 0.136533 0.1024 0.3072 0.068267 0.443733 0.170667a396.151467 396.151467 0 0 1 116.599467 111.2064c0.1024 0.136533 0.1024 0.273067 0.170666 0.375467 13.687467 19.7632 25.3952 40.5504 35.191467 62.1568l1.467733 3.037866c4.3008 9.659733 8.055467 19.592533 11.605334 29.5936 0.546133 1.604267 1.2288 3.106133 1.774933 4.7104 3.822933 11.4688 7.236267 23.176533 10.0352 35.0208a31.061333 31.061333 0 0 0 60.450133-14.336z m-249.275733-560.2304A199.850667 199.850667 0 0 1 512 543.197867a199.850667 199.850667 0 0 1-199.5776-199.611734A199.816533 199.816533 0 0 1 512 144.008533a199.816533 199.816533 0 0 1 199.5776 199.5776z"
                                                            p-id="14272"
                                                            fill="#616161"
                                                        ></path>
                                                    </svg>
                                                </i>
                                                {cnArr.noLoginList[0]}
                                            </a>
                                        </li>
                                        <li className="user-nav-li-register">
                                            <a href="./register?goto=http%3A//edusoho.yanmeiculture.com/course/v2/explore">
                                                <i className="es-icon es-icon-zhuce">
                                                    <svg
                                                        t="1592790494522"
                                                        className="icon"
                                                        viewBox="0 0 1024 1024"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        p-id="13396"
                                                        width="16"
                                                        height="16"
                                                    >
                                                        <path
                                                            d="M752.779277 614.774544c22.772498 0 41.198849-18.466262 41.198849-41.195779 0-13.119284-6.122673-24.787464-15.663319-32.329517l0.212856-0.25993c-31.702207-24.541861-66.94621-44.657755-105.004413-59.222002 48.439015-41.559066 79.256028-103.114295 79.256028-171.951647 0-125.12133-101.463639-226.585993-226.585993-226.585993-125.123377 0-226.587016 101.464663-226.587016 226.585993 0 68.837352 30.818036 130.392581 79.257051 171.951647-154.571154 59.301823-264.565398 208.763415-264.646242 384.297793l0 0.079821c0.080844 22.689607 18.507195 41.118004 41.198849 41.118004 22.770451 0 41.116981-18.428398 41.196802-41.118004 0-181.727662 147.894851-329.58158 329.58158-329.58158 74.497474 0 143.081036 25.128238 198.294595 66.945187C731.868244 610.484682 741.817205 614.774544 752.779277 614.774544zM526.193284 454.008059c-79.498561 0-144.190342-64.692805-144.190342-144.192389 0-79.498561 64.693828-144.191366 144.190342-144.191366 79.498561 0 144.191366 64.692805 144.191366 144.191366S605.691845 454.008059 526.193284 454.008059zM909.926191 752.851423 848.129453 752.851423l0-61.798785c0.001023-17.057115-13.839719-30.897857-30.897857-30.897857-17.099073 0-30.897857 13.840742-30.897857 30.897857l0 61.798785-61.796738 0c-17.097026 0-30.896834 13.838695-30.896834 30.897857 0 17.057115 13.799808 30.897857 30.896834 30.897857l61.796738 0 0 61.796738c0 17.059162 13.798785 30.895811 30.897857 30.895811 17.058139 0 30.897857-13.836649 30.897857-30.895811l0-61.796738 61.796738 0c17.058139 0 30.897857-13.840742 30.897857-30.897857C940.824049 766.691142 926.985353 752.851423 909.926191 752.851423z"
                                                            p-id="13397"
                                                            fill="#616161"
                                                        ></path>
                                                    </svg>
                                                </i>
                                                {cnArr.noLoginList[1]}
                                            </a>
                                        </li>
                                        <li className="text-center visible-xs">
                                            <a href="./course/v2/explore">
                                                <i className="es-icon es-icon-zhuce"></i>
                                                {cnArr.noLoginList[2]}
                                            </a>
                                        </li>
                                        <li className="text-center visible-xs">
                                            <a href="./course/v2/explore">
                                                <i className="es-icon es-icon-zhuce"></i>
                                                {cnArr.noLoginList[3]}
                                            </a>
                                        </li>
                                    </div>
                                )}
                            </div>
                        )}
                        {isLogin && (
                            <div className="avatar">
                                <img
                                    src={userArr.avatar.large}
                                    alt=""
                                    onClick={toggleLoginFlag}
                                />
                                {/* 移动端已登录 */}
                                {loginFlag && (
                                    <div className="noLoginWrap">
                                        <div className="dropdown-header">
                                            <a
                                                className="cd-link-minor"
                                                href="./user/2"
                                            >
                                                {userArr.nickname}
                                            </a>
                                        </div>
                                        <li>
                                            <a href="./my/orders">
                                                <i className="es-icon es-icon-accountwallet">
                                                    <svg
                                                        t="1592792377042"
                                                        className="icon"
                                                        viewBox="0 0 1024 1024"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        p-id="15264"
                                                        width="16"
                                                        height="16"
                                                    >
                                                        <path
                                                            d="M916.637 226.501c-18.72-15.897-43.72-23.844-75.003-23.844l-666.223 0c-30.778 0-54.62 8.844-71.549 26.543-16.919 17.695-25.382 40.389-25.382 68.08l0 436.203c0 12.814 2.562 24.869 7.694 36.15 5.127 11.281 12.056 21.161 20.775 29.619 8.71 8.464 18.975 15.252 30.767 20.395 11.795 5.123 24.358 7.695 37.694 7.695l670.83 0c13.335 0 26.028-2.693 38.082-8.087 12.05-5.375 22.568-12.688 31.544-21.919 8.959-9.226 16.013-20 21.154-32.312 5.131-12.314 7.697-25.388 7.697-39.24L944.717 298.819C944.719 266.503 935.347 242.398 916.637 226.501zM628.142 443.909c5.382-4.353 11.92-6.537 19.613-6.537l156.172 0c7.695 0 14.363 2.173 20.002 6.537 5.645 4.362 8.464 10.128 8.464 17.306 0 7.182-2.819 13.335-8.464 18.468-5.638 5.132-12.306 7.694-20.002 7.694L647.755 487.377c-7.692 0-14.228-2.562-19.613-7.694-5.385-5.133-8.08-11.286-8.08-18.468C620.062 454.042 622.756 448.272 628.142 443.909zM258.11 395.451c3.846-8.97 9.096-16.667 15.767-23.079 6.67-6.413 14.366-11.416 23.085-15.005 8.719-3.59 17.951-5.386 27.694-5.386 21.541 0 39.229 6.8 53.08 20.39 13.844 13.582 20.772 30.899 20.772 51.928 0 10.255-1.923 19.75-5.767 28.469-3.85 8.715-8.981 16.408-15.387 23.079-6.42 6.667-14.109 11.927-23.085 15.772-8.976 3.849-18.845 5.77-29.612 5.77-9.742 0-18.974-1.923-27.694-5.77-8.726-3.847-16.419-9.106-23.085-15.772-6.67-6.671-11.922-14.363-15.767-23.079-3.854-8.725-5.772-18.215-5.772-28.469C252.337 414.043 254.261 404.428 258.11 395.451zM445.43 618.16l0 3.077 0 69.24L205.413 690.477l0-69.24 0-3.088c0-19.996 6.929-37.05 20.772-51.146 13.846-14.109 30.769-21.162 50.773-21.162l96.16 0c9.748 0 19.102 1.921 28.078 5.768 8.979 3.849 16.668 8.972 23.085 15.394 6.417 6.409 11.538 14.098 15.384 23.078C443.512 599.056 445.431 608.417 445.43 618.16L445.43 618.16zM546.205 539.689c4.615-5.137 12.055-7.696 22.308-7.696l235.413 0c10.256 0 17.56 2.559 21.922 7.696 4.364 5.132 6.543 11.544 6.543 19.234 0 7.175-2.307 13.327-6.925 18.46-4.612 5.134-12.049 7.692-22.304 7.692L567.755 585.075c-10.265 0-17.569-2.558-21.927-7.692-4.364-5.13-6.543-11.279-6.543-18.46C539.285 551.233 541.595 544.82 546.205 539.689zM825.085 676.627c-4.869 5.129-12.437 7.698-22.692 7.698L570.057 684.325c-9.744 0-17.178-2.568-22.31-7.698-5.138-5.12-7.694-11.277-7.694-18.46 0-7.185 2.556-13.463 7.694-18.845 5.132-5.392 12.826-8.087 23.085-8.087l229.251 0c10.249 0 18.205 2.693 23.854 8.087 5.638 5.383 8.463 11.661 8.463 18.845C832.401 665.341 829.961 671.494 825.085 676.627z"
                                                            p-id="15265"
                                                            fill="#616161"
                                                        ></path>
                                                    </svg>
                                                </i>
                                                {cnArr.loginList[0]}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="./settings">
                                                <i className="es-icon es-icon-setting">
                                                    <svg
                                                        t="1592792404446"
                                                        className="icon"
                                                        viewBox="0 0 1024 1024"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        p-id="16158"
                                                        width="16"
                                                        height="16"
                                                    >
                                                        <path
                                                            d="M858.090667 554.602667a53.866667 53.866667 0 0 1 0-85.205334 96.448 96.448 0 0 0-71.232-172.010666 53.824 53.824 0 0 1-60.245334-60.245334 96.448 96.448 0 0 0-172.010666-71.253333 55.509333 55.509333 0 0 1-85.205334 0 96.448 96.448 0 0 0-172.010666 71.253333 53.824 53.824 0 0 1-60.245334 60.245334 96.448 96.448 0 0 0-71.253333 172.010666 53.866667 53.866667 0 0 1 0 85.205334 96.448 96.448 0 0 0 71.253333 172.010666 53.824 53.824 0 0 1 60.245334 60.245334 94.336 94.336 0 0 0 58.773333 101.397333A99.605333 99.605333 0 0 0 394.24 896a94.357333 94.357333 0 0 0 75.157333-37.909333 55.509333 55.509333 0 0 1 85.205334 0 96.448 96.448 0 0 0 172.010666-71.253334 53.824 53.824 0 0 1 60.245334-60.224 96.448 96.448 0 0 0 71.253333-172.010666z m-346.090667 106.666666A149.269333 149.269333 0 1 1 661.269333 512 149.44 149.44 0 0 1 512 661.269333z"
                                                            fill="#616161"
                                                            p-id="16159"
                                                        ></path>
                                                    </svg>
                                                </i>
                                                {cnArr.loginList[1]}
                                            </a>
                                        </li>
                                        {parseInt(adminType, 10) === 3 && (
                                            <Fragment>
                                                <li>
                                                    <a href="./admin/">
                                                        <i className="es-icon es-icon-dashboard">
                                                            <svg
                                                                t="1592792431785"
                                                                className="icon"
                                                                viewBox="0 0 1024 1024"
                                                                version="1.1"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                p-id="17012"
                                                                width="16"
                                                                height="16"
                                                            >
                                                                <path
                                                                    d="M128 554.666667h341.333333V128H128v426.666667z m0 341.333333h341.333333V640H128v256z m426.666667 0h341.333333V469.333333H554.666667v426.666667z m0-768v256h341.333333V128H554.666667z"
                                                                    p-id="17013"
                                                                    fill="#616161"
                                                                ></path>
                                                            </svg>
                                                        </i>
                                                        {cnArr.loginList[2]}
                                                    </a>
                                                </li>
                                                <li className="user-nav-li-my">
                                                    <a href="./my">
                                                        <i className="es-icon es-icon-event">
                                                            <svg
                                                                t="1592792497903"
                                                                className="icon"
                                                                viewBox="0 0 1024 1024"
                                                                version="1.1"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                p-id="18890"
                                                                width="16"
                                                                height="16"
                                                            >
                                                                <path
                                                                    d="M0 0h1024v1024H0z"
                                                                    fill="#616161"
                                                                    p-id="18891"
                                                                ></path>
                                                                <path
                                                                    d="M810.666667 896H213.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V256a85.333333 85.333333 0 0 1 85.333333-85.333333h42.666667V106.666667a21.333333 21.333333 0 0 1 21.333333-21.333334h42.666667a21.333333 21.333333 0 0 1 21.333333 21.333334V170.666667h341.333334V106.666667a21.333333 21.333333 0 0 1 21.333333-21.333334h42.666667a21.333333 21.333333 0 0 1 21.333333 21.333334V170.666667h42.666667a85.333333 85.333333 0 0 1 85.333333 85.333333v554.666667a85.333333 85.333333 0 0 1-85.333333 85.333333zM213.333333 341.333333v469.333334h597.333334V341.333333z m213.333334 256H341.333333a42.666667 42.666667 0 0 1-42.666666-42.666666v-85.333334a42.666667 42.666667 0 0 1 42.666666-42.666666h85.333334a42.666667 42.666667 0 0 1 42.666666 42.666666v85.333334a42.666667 42.666667 0 0 1-42.666666 42.666666z"
                                                                    p-id="18892"
                                                                    fill="#616161"
                                                                ></path>
                                                            </svg>
                                                        </i>
                                                        {cnArr.loginList[3]}
                                                    </a>
                                                </li>
                                                <li className="user-nav-li-my">
                                                    <a href="./my/courses/learning">
                                                        <i className="es-icon es-icon-book">
                                                            <svg
                                                                t="1592792471620"
                                                                className="icon"
                                                                viewBox="0 0 1024 1024"
                                                                version="1.1"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                p-id="17947"
                                                                width="16"
                                                                height="16"
                                                            >
                                                                <path
                                                                    d="M256 169.984V512l105.984-64 107.989333 64V169.984H255.957333z m512-83.968q34.005333 0 59.989333 25.002667t25.984 59.008v683.989333q0 34.005333-25.984 59.008T768 938.026667H256q-34.005333 0-59.989333-25.002667t-25.984-59.008V170.026667q0-34.005333 25.984-59.008T256 86.016h512z"
                                                                    p-id="17948"
                                                                    fill="#616161"
                                                                ></path>
                                                            </svg>
                                                        </i>
                                                        {cnArr.loginList[4]}
                                                    </a>
                                                </li>
                                            </Fragment>
                                        )}
                                        {parseInt(adminType, 10) === 2 && (
                                            <li className="user-nav-li-my">
                                                <a href="./my/courses/learning">
                                                    <i className="es-icon es-icon-book">
                                                        <svg
                                                            t="1592792471620"
                                                            className="icon"
                                                            viewBox="0 0 1024 1024"
                                                            version="1.1"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            p-id="17947"
                                                            width="16"
                                                            height="16"
                                                        >
                                                            <path
                                                                d="M256 169.984V512l105.984-64 107.989333 64V169.984H255.957333z m512-83.968q34.005333 0 59.989333 25.002667t25.984 59.008v683.989333q0 34.005333-25.984 59.008T768 938.026667H256q-34.005333 0-59.989333-25.002667t-25.984-59.008V170.026667q0-34.005333 25.984-59.008T256 86.016h512z"
                                                                p-id="17948"
                                                                fill="#616161"
                                                            ></path>
                                                        </svg>
                                                    </i>
                                                    {cnArr.loginList[4]}
                                                </a>
                                            </li>
                                        )}
                                        {parseInt(adminType, 10) === 1 && (
                                            <li className="user-nav-li-my">
                                                <a href="./my">
                                                    <i className="es-icon es-icon-event">
                                                        <svg
                                                            t="1592792497903"
                                                            className="icon"
                                                            viewBox="0 0 1024 1024"
                                                            version="1.1"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            p-id="18890"
                                                            width="16"
                                                            height="16"
                                                        >
                                                            <path
                                                                d="M0 0h1024v1024H0z"
                                                                fill="#616161"
                                                                p-id="18891"
                                                            ></path>
                                                            <path
                                                                d="M810.666667 896H213.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V256a85.333333 85.333333 0 0 1 85.333333-85.333333h42.666667V106.666667a21.333333 21.333333 0 0 1 21.333333-21.333334h42.666667a21.333333 21.333333 0 0 1 21.333333 21.333334V170.666667h341.333334V106.666667a21.333333 21.333333 0 0 1 21.333333-21.333334h42.666667a21.333333 21.333333 0 0 1 21.333333 21.333334V170.666667h42.666667a85.333333 85.333333 0 0 1 85.333333 85.333333v554.666667a85.333333 85.333333 0 0 1-85.333333 85.333333zM213.333333 341.333333v469.333334h597.333334V341.333333z m213.333334 256H341.333333a42.666667 42.666667 0 0 1-42.666666-42.666666v-85.333334a42.666667 42.666667 0 0 1 42.666666-42.666666h85.333334a42.666667 42.666667 0 0 1 42.666666 42.666666v85.333334a42.666667 42.666667 0 0 1-42.666666 42.666666z"
                                                                p-id="18892"
                                                                fill="#616161"
                                                            ></path>
                                                        </svg>
                                                    </i>
                                                    {cnArr.loginList[3]}
                                                </a>
                                            </li>
                                        )}
                                        <li className="hidden-md">
                                            <a href="./notification">
                                                <span className="pull-right num"></span>
                                                <i className="es-icon es-icon-notificationson">
                                                    <svg
                                                        t="1592792568211"
                                                        className="icon"
                                                        viewBox="0 0 1024 1024"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        p-id="24358"
                                                        width="16"
                                                        height="16"
                                                    >
                                                        <path
                                                            d="M238.92992 409.6a272.0768 272.0768 0 0 1 80.00512-193.06496l-48.30208-48.30208C208.86528 230.00064 170.67008 315.33056 170.67008 409.6h68.25984zM853.32992 409.6c0-94.26944-38.1952-179.59936-100.00384-241.39776l-48.26112 48.30208A272.18944 272.18944 0 0 1 785.07008 409.6h68.25984zM415.86688 819.2c14.1312 39.66976 51.59936 68.27008 96.13312 68.27008 44.50304 0 82.00192-28.60032 96.13312-68.27008H415.86688zM716.8 648.52992V409.6c0-101.46816-73.8304-185.46688-170.67008-201.728v-71.34208h-68.25984V207.872C381.0304 224.13312 307.2 308.13184 307.2 409.6v239.07328a68.2496 68.2496 0 0 1-68.27008 68.096V768h546.14016v-51.2A68.27008 68.27008 0 0 1 716.8 648.52992z"
                                                            p-id="24359"
                                                            fill="#616161"
                                                        ></path>
                                                    </svg>
                                                </i>
                                                {cnArr.loginList[5]}
                                            </a>
                                        </li>
                                        {/* <li className="hidden-md">
                                            <a href="./message/">
                                                <span className="pull-right num"></span>
                                                <i className="es-icon es-icon-mail">
                                                    <svg
                                                        t="1592792607230"
                                                        className="icon"
                                                        viewBox="0 0 1024 1024"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        p-id="25268"
                                                        width="16"
                                                        height="16"
                                                    >
                                                        <path
                                                            d="M987.428571 109.714286H36.571429c-20.228571 0-36.571429 16.342857-36.571429 36.571428v731.428572c0 20.228571 16.342857 36.571429 36.571429 36.571428h950.857142c20.228571 0 36.571429-16.342857 36.571429-36.571428V146.285714c0-20.228571-16.342857-36.571429-36.571429-36.571428z m-92.342857 124.457143L534.514286 514.742857c-8.914286 6.971429-21.371429 6.971429-30.285715 0L143.542857 234.171429A8.228571 8.228571 0 0 1 148.571429 219.428571h741.485714a8.228571 8.228571 0 0 1 5.028571 14.742858z"
                                                            p-id="25269"
                                                            fill="#616161"
                                                        ></path>
                                                    </svg>
                                                </i>
                                                {cnArr.loginList[6]}
                                            </a>
                                        </li> */}
                                        <li className="text-center user-nav-li-logout">
                                            <a href="./switch/language?language=zh_CN&amp;_target_path=/course/v2/explore">
                                                {cnArr.loginList[7]}
                                            </a>
                                        </li>
                                        <li className="text-center user-nav-li-logout">
                                            <a href="./switch/language?language=en&amp;_target_path=/course/v2/explore">
                                                {cnArr.loginList[8]}
                                            </a>
                                        </li>
                                        <li className="user-nav-li-logout">
                                            <a href="./logout">
                                                <i className="es-icon es-icon-power">
                                                    <svg
                                                        t="1592792639674"
                                                        className="icon"
                                                        viewBox="0 0 1024 1024"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        p-id="26595"
                                                        width="16"
                                                        height="16"
                                                    >
                                                        <path
                                                            d="M570.107 47.258H453.903V572.78h116.199V47.258z m208.86 86.886l-81.316 80.794c92.872 63.457 162.427 173.143 162.427 300.052 0 190.48-156.544 346.286-348.175 346.286-191.427 0-348.176-155.807-348.176-346.286 0-126.91 69.76-236.595 168.31-294.277l-86.994-86.569C129.055 220.713 47.733 359.188 47.733 514.99c0 254.04 209.076 461.752 464.165 461.752 255.298 0 464.368-207.708 464.368-461.752 0.005-155.802-81.31-294.277-197.299-380.846z"
                                                            p-id="26596"
                                                            fill="#616161"
                                                        ></path>
                                                    </svg>
                                                </i>
                                                {cnArr.loginList[9]}
                                            </a>
                                        </li>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    <div className="header_right_wrap">
                        {!isLogin && (
                            <div className="header_right">
                                <a className="login" href="./login">
                                    {cnArr.noLoginList[0]}
                                </a>
                                <a
                                    className="register"
                                    href={
                                        "register?goto=http%3A//edusoho.yanmeiculture.com/" +
                                        urlHtmlPath()
                                    }
                                >
                                    {cnArr.noLoginList[1]}
                                </a>
                                <div className="language">
                                    <a
                                        className="changeLanguage"
                                        href={
                                            "./switch/language?language=zh_CN&_target_path=" +
                                            urlHtmlPath()
                                        }
                                    >
                                        {cnArr.noLoginList[2]}
                                    </a>
                                    <a
                                        className="changeLanguage"
                                        href={
                                            "./switch/language?language=en&_target_path=" +
                                            urlHtmlPath()
                                        }
                                    >
                                        {cnArr.noLoginList[3]}
                                    </a>
                                </div>
                            </div>
                        )}
                        {isLogin && (
                            <div className="header_login">
                                <div className="admin">
                                    {adminType === 3 ? (
                                        <div onClick={openAdmin}>
                                            {cnArr.admin[0]}
                                            <svg
                                                t="1592648908596"
                                                className="icon"
                                                viewBox="0 0 1024 1024"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                p-id="2120"
                                                width="16"
                                                height="16"
                                            >
                                                <path
                                                    d="M472.064 751.552 72.832 352.32c-22.08-22.08-22.08-57.792 0-79.872 22.016-22.016 57.792-22.08 79.872 0L512 631.744l359.296-359.296c22.016-22.016 57.792-22.08 79.872 0 22.08 22.08 22.016 57.792 0 79.872l-399.232 399.232C529.856 773.568 494.144 773.568 472.064 751.552z"
                                                    p-id="2121"
                                                ></path>
                                            </svg>
                                        </div>
                                    ) : adminType === 2 ? (
                                        <Fragment>
                                            <a href="./my">{cnArr.admin[1]}</a>
                                        </Fragment>
                                    ) : (
                                        <Fragment>
                                            <a href="./my/courses/learning">
                                                {cnArr.admin[2]}
                                            </a>
                                        </Fragment>
                                    )}
                                    {adminFlag && (
                                        <div className="adminList">
                                            {adminShowArr[0] > 0 && (
                                                <li>
                                                    <a href="./admin/">
                                                        {cnArr.admin[0]}
                                                    </a>
                                                </li>
                                            )}
                                            {adminShowArr[1] > 0 && (
                                                <li>
                                                    <a href="./my">
                                                        {cnArr.admin[1]}
                                                    </a>
                                                </li>
                                            )}
                                            {adminShowArr[2] > 0 && (
                                                <li>
                                                    <a href="./my/courses/learning">
                                                        {cnArr.admin[2]}
                                                    </a>
                                                </li>
                                            )}
                                        </div>
                                    )}
                                </div>

                                <div className="msg">
                                    <div onClick={toggleMsg} className="svg">
                                        <svg
                                            t="1594104564780"
                                            className="icon"
                                            viewBox="0 0 1024 1024"
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            p-id="2113"
                                            width="32"
                                            height="32"
                                        >
                                            <path
                                                d="M942.78 724.58c-38.64-41.52-110.94-103.98-110.94-308.58 0-155.4-108.96-279.8-255.88-310.32V64c0-35.34-28.64-64-63.96-64s-63.96 28.66-63.96 64v41.68C301.12 136.2 192.16 260.6 192.16 416c0 204.6-72.3 267.06-110.94 308.58-12 12.9-17.32 28.32-17.22 43.42 0.22 32.8 25.96 64 64.2 64h767.6c38.24 0 64-31.2 64.2-64 0.1-15.1-5.22-30.54-17.22-43.42zM199.06 736c42.44-55.94 88.84-148.66 89.06-318.84 0-0.4-0.12-0.76-0.12-1.16 0-123.72 100.28-224 224-224s224 100.28 224 224c0 0.4-0.12 0.76-0.12 1.16 0.22 170.2 46.62 262.92 89.06 318.84H199.06zM512 1024c70.64 0 127.94-57.3 127.94-128H384.06c0 70.7 57.3 128 127.94 128z"
                                                fill="#0268D1"
                                                p-id="2114"
                                            ></path>
                                        </svg>
                                    </div>
                                    {notiArr.length > 0 && (
                                        <span className="inform-dropdown-toggle__num cd-badge cd-badge-danger ">
                                            {notiArr.length}
                                        </span>
                                    )}
                                    {msgFlag > 0 && (
                                        <div className="msgAlert">
                                            {/* <div className="msgTabs">
                                                <div
                                                    className={tabCls}
                                                    onClick={setMsge1}
                                                >
                                                    {cnArr.msg.notice}
                                                </div>
                                                <div
                                                    className={tabCls2}
                                                    onClick={setMsge2}
                                                >
                                                    {cnArr.msg.letter}
                                                </div>
                                            </div> */}
                                            <div className="mid">
                                                {msgFlag === 1 ? (
                                                    <div className="notice">
                                                        {notiArr.length ? (
                                                            <div className="notiList">
                                                                <div className="title">
                                                                    {
                                                                        cnArr
                                                                            .notifacation[0]
                                                                    }
                                                                    <span className="inform-dropdown-dot"></span>
                                                                </div>
                                                                <div className="listContent">
                                                                    {notiArr.map(
                                                                        item => {
                                                                            return (
                                                                                <a
                                                                                    href={
                                                                                        "./notification?id=" +
                                                                                        item.id
                                                                                    }
                                                                                    className="listLink"
                                                                                >
                                                                                    <span>
                                                                                        {
                                                                                            cnArr
                                                                                                .notifacation[1]
                                                                                        }

                                                                                        :
                                                                                    </span>
                                                                                    {
                                                                                        item
                                                                                            .data
                                                                                            .title
                                                                                    }
                                                                                </a>
                                                                            );
                                                                        }
                                                                    )}
                                                                </div>
                                                                <a
                                                                    className="botMore"
                                                                    href="./notification"
                                                                >
                                                                    {
                                                                        cnArr
                                                                            .msg
                                                                            .seeMoreNotice
                                                                    }
                                                                </a>
                                                            </div>
                                                        ) : (
                                                            <Fragment>
                                                                <img
                                                                    src={
                                                                        window.baseUrl +
                                                                        "/static-dist/app/img/notice/null-notice.png?version=8.7.3"
                                                                    }
                                                                    alt=""
                                                                />
                                                                {
                                                                    cnArr.msg
                                                                        .nomoreNotice
                                                                }
                                                                <a
                                                                    className="botMore"
                                                                    href="./notification"
                                                                >
                                                                    {
                                                                        cnArr
                                                                            .msg
                                                                            .seeMoreNotice
                                                                    }
                                                                </a>
                                                            </Fragment>
                                                        )}
                                                    </div>
                                                ) : (
                                                    <div className="letter">
                                                        <img
                                                            src={
                                                                window.baseUrl +
                                                                "/static-dist/app/img/notice/null-message@2x.png?version=8.7.3"
                                                            }
                                                            alt=""
                                                        />
                                                        {cnArr.msg.nomoreLetter}
                                                        <a
                                                            className="botMore"
                                                            href="https//:www.baidu.com"
                                                        >
                                                            {
                                                                cnArr.msg
                                                                    .seeMoreLetter
                                                            }
                                                        </a>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}{" "}
                                </div>
                                <div className="avatar">
                                    <img
                                        src={userArr.avatar.small}
                                        alt=""
                                        onClick={toggleUser}
                                    />
                                    {useFlag && (
                                        <div className="userWrap">
                                            <div className="name">
                                                <div className="avatarWrap">
                                                    <img
                                                        src={
                                                            userArr.avatar.large
                                                        }
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="useName">
                                                    {userArr.nickname}
                                                </div>
                                            </div>
                                            <div className="userTabs">
                                                <a
                                                    className="tab"
                                                    href="./settings"
                                                >
                                                    <i className="es-icon es-icon-setting">
                                                        <svg
                                                            t="1592792404446"
                                                            className="icon"
                                                            viewBox="0 0 1024 1024"
                                                            version="1.1"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            p-id="16158"
                                                            width="16"
                                                            height="16"
                                                        >
                                                            <path
                                                                d="M858.090667 554.602667a53.866667 53.866667 0 0 1 0-85.205334 96.448 96.448 0 0 0-71.232-172.010666 53.824 53.824 0 0 1-60.245334-60.245334 96.448 96.448 0 0 0-172.010666-71.253333 55.509333 55.509333 0 0 1-85.205334 0 96.448 96.448 0 0 0-172.010666 71.253333 53.824 53.824 0 0 1-60.245334 60.245334 96.448 96.448 0 0 0-71.253333 172.010666 53.866667 53.866667 0 0 1 0 85.205334 96.448 96.448 0 0 0 71.253333 172.010666 53.824 53.824 0 0 1 60.245334 60.245334 94.336 94.336 0 0 0 58.773333 101.397333A99.605333 99.605333 0 0 0 394.24 896a94.357333 94.357333 0 0 0 75.157333-37.909333 55.509333 55.509333 0 0 1 85.205334 0 96.448 96.448 0 0 0 172.010666-71.253334 53.824 53.824 0 0 1 60.245334-60.224 96.448 96.448 0 0 0 71.253333-172.010666z m-346.090667 106.666666A149.269333 149.269333 0 1 1 661.269333 512 149.44 149.44 0 0 1 512 661.269333z"
                                                                fill="#616161"
                                                                p-id="16159"
                                                            ></path>
                                                        </svg>
                                                    </i>
                                                    {cnArr.user.setting}
                                                </a>
                                            </div>
                                            <a
                                                className="botMore exit_link"
                                                onClick={() =>
                                                    setIsLogin(false)
                                                }
                                                href="./logout"
                                            >
                                                {cnArr.user.exit}
                                            </a>
                                        </div>
                                    )}
                                </div>
                                <div className="language">
                                    <a
                                        className="changeLanguage"
                                        href={
                                            "./switch/language?language=zh_CN&_target_path=" +
                                            urlHtmlPath()
                                        }
                                    >
                                        {cnArr.noLoginList[2]}
                                    </a>
                                    <a
                                        className="changeLanguage"
                                        href={
                                            "./switch/language?language=en&_target_path=" +
                                            urlHtmlPath()
                                        }
                                    >
                                        {cnArr.noLoginList[3]}
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="navigation">
                <div className="center">
                    <div className="container navigation_con">
                        <div className="nav_home active">
                            <div className="nav_tab">
                                <a className="top_link" href="./index.html">
                                    {cnArr.menu[0].title}
                                </a>
                            </div>
                        </div>
                        <div className="nav_comm">
                            <div className="nav_tab">
                                <a className="top_link" href="./museum.html">
                                    {cnArr.menu[1].title}
                                    {/* <span>
                                    <img
                                        src="./img/component/header/jt.png"
                                        alt=""
                                    />
                                </span> */}
                                </a>
                                {/* <div className="nav_select nav_select1">
                                <a
                                    className="select_txt"
                                    href="./museum.html#/xncg"
                                >
                                    {cnArr.menu[1].listMenu[0]}
                                </a>
                                <a
                                    className="select_txt"
                                    href="./museum.html#/kxhd"
                                >
                                    {cnArr.menu[1].listMenu[2]}
                                </a>
                            </div> */}
                            </div>
                        </div>
                        <div className="nav_comm">
                            <div className="nav_tab">
                                <a className="top_link" href="./course.html">
                                    {cnArr.menu[2].title}
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
                                        href="./course/v2/explore"
                                    >
                                        {cnArr.menu[2].listMenu[0]}
                                    </a>
                                    <a
                                        className="select_txt"
                                        href="./kjzy.html"
                                    >
                                        {cnArr.menu[2].listMenu[1]}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="nav_comm">
                            <div className="nav_tab">
                                <a className="top_link" href="./resource.html">
                                    {cnArr.menu[3].title}
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
                                        href="./resource.html"
                                    >
                                        {cnArr.menu[3].listMenu[0]}
                                    </a>
                                    <a
                                        className="select_txt"
                                        href="./resource.html#/kpbg"
                                    >
                                        {cnArr.menu[3].listMenu[1]}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="search">
                        <Search
                            placeholder={cnArr.search}
                            onSearch={searchKeyWord}
                            enterButton
                            className="searchIpt"
                            // onKeyUp={keyDown}
                        />
                    </div>
                </div>
            </div>
            <Drawer
                placement="left"
                closable={false}
                onClose={drawerClose}
                visible={menuFlag}
                key="left"
                className="drawer"
            >
                {menuFlag && (
                    <div className="menuWrap">
                        <div className="search">
                            <Search
                                placeholder={cnArr.search}
                                onSearch={searchKeyWord}
                                enterButton
                                className="searchIpt"
                            />
                        </div>
                        <Menu
                            onClick={handleClick}
                            style={{ width: 256 }}
                            mode="inline"
                        >
                            <Menu.Item key="0">
                                <a className="top_link" href="/index.html">
                                    {cnArr.menu[0].title}
                                </a>
                            </Menu.Item>
                            <Menu.Item key="0">
                                <a className="top_link" href="/museum.html">
                                    {cnArr.menu[1].title}
                                </a>
                            </Menu.Item>
                            {/* <SubMenu key="sub1" title={cnArr.menu[1].title}>
                                <Menu.Item key="1">
                                    <a
                                        className="select_txt"
                                        href="/museum.html#/xncg"
                                    >
                                        {cnArr.menu[1].listMenu[0]}
                                    </a>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <a
                                        className="select_txt"
                                        href="/museum.html#/kxhd"
                                    >
                                        {cnArr.menu[1].listMenu[2]}
                                    </a>
                                </Menu.Item>
                            </SubMenu> */}
                            <SubMenu key="sub3" title={cnArr.menu[2].title}>
                                <Menu.Item key="2">
                                    <a
                                        className="select_txt"
                                        href="./course/v2/explore"
                                    >
                                        {cnArr.menu[2].listMenu[0]}
                                    </a>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <a
                                        className="select_txt"
                                        href="./kjzy.html"
                                    >
                                        {cnArr.menu[2].listMenu[1]}
                                    </a>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub4" title={cnArr.menu[3].title}>
                                <Menu.Item key="11">
                                    <a
                                        className="select_txt"
                                        href="/resource.html"
                                    >
                                        {cnArr.menu[3].listMenu[0]}
                                    </a>
                                </Menu.Item>
                                <Menu.Item key="12">
                                    <a
                                        className="select_txt"
                                        href="/resource.html#/kpbg"
                                    >
                                        {cnArr.menu[3].listMenu[1]}
                                    </a>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>
                )}
            </Drawer>
        </div>
    );
});

export default Header;
