/*
 * @Author: your name
 * @Date: 2020-06-05 09:34:46
 * @LastEditTime: 2020-09-23 17:54:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \multi-entry-react-app\src\pc\index.js
 */

import React, { Component } from "react";
import ReactDOM from "react-dom";

import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import { HashRouter, Switch, Route } from "react-router-dom";
import zhCN from "antd/es/locale/zh_CN";
import "normalize.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Etzx from "./etzx";
import Kpbg from "./kpbg";
import { ConfigProvider } from "antd";
import Header from "./../component/header";
import Footer from "./../component/footer";
import VideoDetail from "./content/video";
import VideoDetailList from "./content/videoList";

class App extends Component {
    render() {
        return (
            <ConfigProvider locale={zhCN}>
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
            </ConfigProvider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
