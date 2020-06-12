/*
 * @Author: your name
 * @Date: 2020-06-05 09:34:46
 * @LastEditTime: 2020-06-09 14:12:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \multi-entry-react-app\src\pc\index.js
 */

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Footer from "./../component/footer";
import Header from "./../component/header";
import HomeWrap from "./index/home";

import "normalize.css";

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <HomeWrap />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<Home />, document.getElementById("root"));
