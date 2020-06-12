/*
 * @Author: your name
 * @Date: 2020-06-05 09:34:46
 * @LastEditTime: 2020-06-10 18:09:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \multi-entry-react-app\src\h5\index.js
 */

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";

import "normalize.css";
import "./index.less";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

import Header from "./../component/header";
import Footer from "./../component/footer";

import Museum from "./index/museum";
import Kxhd from "./kxhd";
import Xncg from "./xncg";
import Zxkjzx from "./zxkjzx";
class Pc extends Component {
    render() {
        return (
            <div className="museumHome">
                <Header />
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={Museum} />
                        <Route exact path="/kxhd" component={Kxhd} />
                        <Route exact path="/xncg" component={Xncg} />
                        <Route exact path="/zxkjzx" component={Zxkjzx} />
                    </Switch>
                </HashRouter>
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<Pc />, document.getElementById("root"));
