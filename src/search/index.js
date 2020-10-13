/*
 * @Author: your name
 * @Date: 2020-06-25 15:10:13
 * @LastEditTime: 2020-09-23 17:54:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xnkxzx\src\search\index.js
 */

import React, { Component } from "react";
import ReactDOM from "react-dom";
import zhCN from "antd/es/locale/zh_CN";
import "normalize.css";
import "./index.less";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import { ConfigProvider } from "antd";
import Header from "./../component/header";
import Footer from "./../component/footer";
import Search from "./index.jsx";
class Pc extends Component {
    render() {
        return (
            <ConfigProvider locale={zhCN}>
                <Header />
                <Search />
                <Footer />
            </ConfigProvider>
        );
    }
}

ReactDOM.render(<Pc />, document.getElementById("root"));
