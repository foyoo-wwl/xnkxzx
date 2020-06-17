/*
 * @Author: your name
 * @Date: 2020-06-05 09:34:46
 * @LastEditTime: 2020-06-17 09:15:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \multi-entry-react-app\src\pc\index.js
 */

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";

import "normalize.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Resource from "./index/index";
import Etzx from "./etzx";
import Kpbg from "./kpbg";

import Header from "./../component/header";
import Footer from "./../component/footer";
import VideoDetail from "./content/video";
import VideoDetailList from "./content/videoList";

class App extends Component {
    render() {
        return (
            <div className="resourceHome">
                <Header />
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={Etzx} />
                        <Route path="/etzx" component={Etzx} />
                        <Route path="/kpbg" component={Kpbg} />
                        <Route path="/detail/:id" component={VideoDetail} />
                        <Route
                            path="/detaillist/:id"
                            component={VideoDetailList}
                        />
                    </Switch>
                </HashRouter>
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
