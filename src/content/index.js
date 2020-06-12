/*
 * @Author: your name
 * @Date: 2020-06-11 17:50:03
 * @LastEditTime: 2020-06-11 17:53:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \multi-entry-react-app\src\content\index.js
 */

import React, { Component } from "react";
import ReactDOM from "react-dom";

import "normalize.css";

import Header from "./../component/header";
import Footer from "./../component/footer";
import Content from "./content";

class App extends Component {
    render() {
        return (
            <div className="resourceHome">
                <Header />
                <Content />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
