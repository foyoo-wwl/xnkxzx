/*
 * @Author: your name
 * @Date: 2020-06-27 17:22:00
 * @LastEditTime: 2020-07-09 13:51:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xnkxzx\src\kjzy\index.js
 */

import React, { Component } from "react";
import ReactDOM from "react-dom";

import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import Footer from "./../component/footer";
import Header from "./../component/header";
import Kjzy from "./index.jsx";

import "normalize.css";
import "./index.less";
class Home extends Component {
    render() {
        return (
            <div className="kjzyPart">
                <Header />
                <Kjzy />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<Home />, document.getElementById("root"));
