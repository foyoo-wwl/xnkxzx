/*
 * @Author: your name
 * @Date: 2020-06-05 09:34:46
 * @LastEditTime: 2020-09-23 17:54:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \multi-entry-react-app\src\h5\index.js
 */

import React, { Component } from "react";
import ReactDOM from "react-dom";

import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import { HashRouter, Switch, Route } from "react-router-dom";
import zhCN from "antd/es/locale/zh_CN";
import "normalize.css";
import "./index.less";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

import { ConfigProvider } from "antd";
import Header from "./../component/header";
import Footer from "./../component/footer";

import Museum from "./index/museum";
import Kxhd from "./kxhd";
import Xncg from "./xncg";
import Zxkjzx from "./zxkjzx";
class Pc extends Component {
    render() {
        return (
            <ConfigProvider locale={zhCN}>
                <div className="museumHome">
                    <Header />
                    <HashRouter>
                        <Switch>
                            <Route exact path="/" component={Xncg} />
                            <Route exact path="/kxhd" component={Kxhd} />
                            <Route exact path="/xncg" component={Xncg} />
                            <Route exact path="/zxkjzx" component={Zxkjzx} />
                        </Switch>
                    </HashRouter>
                    <Footer />
                </div>
            </ConfigProvider>
        );
    }
}

ReactDOM.render(<Pc />, document.getElementById("root"));
