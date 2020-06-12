import React, { memo, useState } from "react";

import "./index.less";
const Content = memo(() => {
    const [list, setList] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

    const goToDom = item => {
        let anchorElement = document.getElementById("id" + item);
        if (anchorElement) {
            anchorElement.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className="contentWrap">
            <div className="tabWrap">
                {list.map(item => {
                    return (
                        <li key={item} onClick={() => goToDom(item)}>
                            {item}
                        </li>
                    );
                })}
            </div>
            {list.map(item => {
                return (
                    <div className="liSec" id={"id" + item} key={item}>
                        {item}
                    </div>
                );
            })}
        </div>
    );
});
export default Content;
