import React, { memo, useState, useEffect, Fragment } from "react";
import axios from "axios";

import "./index.less";
import "./../mock/indexMock";
import CommList from "./commList";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Breadcrumb } from "antd";
import Title from "./../../component/commonTitle";
import KxhdalCard from "./../../component/kxhdalCard";
const Museum = memo(() => {
    const [indexArr, setIndexArr] = useState({});
    useEffect(() => {
        axios
            .get("/museum/index")
            .then(res => {
                //console.log(JSON.stringify(res.data));
                console.log(res.data.data);
                setIndexArr(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    return (
        <div className="museunm_wrap">
            <div className="breadcrumb">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <a href="/index.html">首页</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="/museum.html">虚拟科技馆</a>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            {indexArr.xnkjg && (
                <Fragment>
                    <CommList
                        title="虚拟科技馆"
                        icon="museum/icon1.png"
                        link="www.baidu.com"
                        listArr={indexArr.xnkjg.splice(0, 3)}
                    />
                    <CommList
                        title="最新展评"
                        icon="museum/icon2.png"
                        link="www.baidu.com"
                        listArr={indexArr.zxzp.splice(0, 3)}
                    />
                    <CommList
                        title="最新展项"
                        icon="museum/icon3.png"
                        link="www.baidu.com"
                        listArr={indexArr.zxzx.splice(0, 3)}
                    />
                    <div className="kxhdalWrap">
                        <Title
                            imgUrl="museum/icon3.png"
                            title="科学活动案例"
                            moreLink="www.baidu.com"
                        />
                        <div className="hdalContent">
                            {indexArr.kxhdal.splice(0, 2).map(item => {
                                return <KxhdalCard {...item} key={item.id} />;
                            })}
                        </div>
                    </div>
                </Fragment>
            )}
        </div>
    );
});

export default Museum;
