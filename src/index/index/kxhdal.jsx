/**
 * 科学活动案例组件
 */
/* eslint-disable no-new */
import React, { memo, useState, useEffect } from "react";
import KxhdalCard from "./../../component/kxhdalCard";
import Title from "./../../component/commonTitle";
import "./index.less";
const Kxhdal = memo(props => {
    const { kxhdalData, language } = props;
    const [title, setTitle] = useState();
    useEffect(() => {
        if (language === "en") {
            setTitle("Teaching Resources");
        } else {
            setTitle(kxhdalData.title);
        }
        console.log(kxhdalData);
    }, []);
    return (
        <div className="kxhdalWrap">
            <Title
                imgUrl={"kxhdal/kxhdal_logo.png"}
                title={title}
                moreLink="/kjzy.html"
                language={language}
            />
            <div className="xnkjg_list">
                {kxhdalData.list.map(item => {
                    return (
                        <KxhdalCard
                            key={item.id}
                            {...item}
                            language={language}
                        />
                    );
                })}
            </div>
        </div>
    );
});
export default Kxhdal;
