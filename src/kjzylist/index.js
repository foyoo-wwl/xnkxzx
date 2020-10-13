/*
 * @Author: your name
 * @Date: 2020-07-21 15:13:18
 * @LastEditTime: 2020-07-21 16:11:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xnkxzx\src\kjzylist\index.js
 */
import React, { Component } from "react";
import ReactDOM from "react-dom";

import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import Footer from "./../component/footer";
import Header from "./../component/header";
import KjzyList from "./index.jsx";

import "./index.less";
import "normalize.css";

class Home extends Component {
    render() {
        return (
            <div className="kjzycontent">
                <Header />
                <KjzyList />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<Home />, document.getElementById("root"));
