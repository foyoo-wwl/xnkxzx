import React, { memo, useState, useEffect } from "react";
import axios from "axios";
import "./mock";
import { List, Breadcrumb, Empty, Pagination } from "antd";
import cookie from "react-cookies";

const Search = memo(props => {
    const [searchArr, setSearchArr] = useState([]);
    const [titleArr, setTitleArr] = useState(["首页", "搜索列表"]);
    useEffect(() => {
        axios("/search").then(res => {
            setSearchArr(res.data.data.list);
        });
        if (cookie.load("_locale") === "en") {
            setTitleArr(["Home", "Search"]);
        }
    }, []);
    return (
        <div className="searchWrap">
            <div className="breadcrumb">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <a href="/index.html">{titleArr[0]}</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>{titleArr[1]}</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            {searchArr.length > 0 ? (
                <List
                    itemLayout="horizontal"
                    dataSource={searchArr}
                    className="list"
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={
                                    <a href="https://ant.design">
                                        {item.title}=={item.time}
                                    </a>
                                }
                            />
                        </List.Item>
                    )}
                />
            ) : (
                <Empty />
            )}
            <Pagination defaultCurrent={1} total={50} className="pagination" />
        </div>
    );
});

export default Search;
