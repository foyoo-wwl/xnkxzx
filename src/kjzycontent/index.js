/*
 * @Author: your name
 * @Date: 2020-06-27 17:24:46
 * @LastEditTime: 2020-09-23 17:54:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xnkxzx\src\kjzyContent\index.js
 */
import React, { Component } from "react";
import ReactDOM from "react-dom";

import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import Footer from "./../component/footer";
import Header from "./../component/header";
import KjzyContent from "./index.jsx";

import "./index.less";
import "normalize.css";

class Home extends Component {
    render() {
        return (
            <div class="kjzycontent">
                <Header />
                <KjzyContent />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<Home />, document.getElementById("root"));
