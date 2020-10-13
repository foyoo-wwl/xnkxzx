/**
 * 资源课程组件
 */
/* eslint-disable no-new */
import React, { memo, useState, useEffect } from "react";
import KjzyCard from "./../../component/kjzyCard";
import "./index.less";
import Title from "./../../component/commonTitle";
import cookie from "react-cookies";
const Kjzy = memo(props => {
    const { kjztData, language } = props;
    const [title, setTitle] = useState();
    const [stitle, setStitle] = useState("来源");
    useEffect(() => {
        if (language === "en") {
            setTitle("For Students");
        } else {
            setTitle(kjztData.title);
        }
        // cookie.save("_locale", "en");
        if (cookie.load("_locale") === "en") {
            setStitle("Source");
        }
    }, []);
    return (
        <div className="kjzyWrap">
            <Title
                imgUrl={"kjzy/kjzy_logo.png"}
                title={title}
                moreLink="/resource.html"
                language={language}
            />
            <div className="xnkjg_list">
                {kjztData.list.map(item => {
                    return (
                        <KjzyCard
                            {...item}
                            key={item.id}
                            sourceTitle={stitle}
                        />
                    );
                })}
            </div>
        </div>
    );
});

export default Kjzy;
