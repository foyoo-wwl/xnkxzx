/*
 * @Author: your name
 * @Date: 2020-07-31 16:10:18
 * @LastEditTime: 2020-07-31 16:13:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xnkxzx\src\class\index.js
 */
import React, { Component } from "react";
import ReactDOM from "react-dom";

import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import Footer from "../component/footer";
import Header from "../component/header";
import Course from "./index.jsx";

import "normalize.css";
import "./index.less";
class CourseWRap extends Component {
    render() {
        return (
            <div className="kjzyPart">
                <Header />
                <Course />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<CourseWRap />, document.getElementById("root"));
