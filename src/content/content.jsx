import React, { memo, useState, useEffect } from "react";

import "./index.less";
import cookie from "react-cookies";
const Content = memo(props => {
    const [isTop, setIsTop] = useState(false);
    const goToDom = item => {
        let anchorElement = document.getElementById("id" + item);
        if (anchorElement) {
            anchorElement.scrollIntoView({ behavior: "smooth" });
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);
    const handleScroll = e => {
        if (document.documentElement.scrollTop > 220) {
            setIsTop(true);
        } else {
            setIsTop(false);
        }
    };
    const { listarr } = props;
    return (
        <div className="contentListWrap">
            <div className={isTop ? "tabWrap fix" : "tabWrap"}>
                {listarr.map(item => {
                    return (
                        <li key={item.id} onClick={() => goToDom(item.id)}>
                            {item.title}
                        </li>
                    );
                })}
            </div>
            <div className="listWrap">
                {listarr.map(item => {
                    return (
                        <div
                            className="liSec"
                            id={"id" + item.id}
                            key={item.id}
                        >
                            <div className="re-tt1"> {item.title}</div>
                            <div
                                className="body"
                                dangerouslySetInnerHTML={{ __html: item.body }}
                            ></div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
});
export default Content;
