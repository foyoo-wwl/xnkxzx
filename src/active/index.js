/*
 * @Author: your name
 * @Date: 2020-06-05 09:34:46
 * @LastEditTime: 2020-09-23 17:55:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \multi-entry-react-app\src\h5\index.js
 */

import React, { Component } from "react";
import ReactDOM from "react-dom";

import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import { HashRouter, Switch, Route } from "react-router-dom";
import "./index.less";
import "normalize.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Index from "./index/index";
import Previous from "./previous/previous";
import Detail from "./content/";

import Header from "./../component/header";
import Footer from "./../component/footer";

class Pc extends Component {
    render() {
        return (
            <div className="activeWrap">
                <Header />
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={Index} />
                        <Route path="/previous" component={Previous} />
                        <Route path="/detail/:id" component={Detail} />
                    </Switch>
                </HashRouter>
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<Pc />, document.getElementById("root"));
