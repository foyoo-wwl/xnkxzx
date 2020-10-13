/*
 * @Author: your name
 * @Date: 2020-06-11 17:50:03
 * @LastEditTime: 2020-09-23 17:55:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \multi-entry-react-app\src\content\index.js
 */

import React, { Component } from "react";
import ReactDOM from "react-dom";

import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import "normalize.css";
import Header from "./../component/header";
import Footer from "./../component/footer";
import Content from "./content";
import Article from "./article";
class App extends Component {
    render() {
        return (
            <div className="resourceHome">
                <Header />
                <Article />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
