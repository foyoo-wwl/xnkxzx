/**
 * 主题活动
 */
/* eslint-disable no-new */
import React, { memo, useState, useEffect } from "react";
import Title from "./../../component/commonTitle";
const Zthd = memo(props => {
    const { zthdData } = props;
    useEffect(() => {
        console.log(zthdData);
    }, []);
    return (
        <div className="zthdWrap">
            <Title
                imgUrl={"zthd/zthd_logo.png"}
                title={zthdData.title}
                moreLink={zthdData.moreLink}
            />
            <div className="xnkjg_list">
                {zthdData.list.map(item => {
                    return (
                        <a className="zthd_comm" href={item.link} key={item.id}>
                            <img
                                src="img/component/zthd/zthd_banner.png"
                                alt=""
                            />
                        </a>
                    );
                })}
            </div>
        </div>
    );
});

export default Zthd;
