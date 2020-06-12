/* eslint-disable no-underscore-dangle */
import React, { memo, useState, useEffect, useCallback } from "react";
import axios from "axios";

import "../mock/listmock";
import "../mock/yearmock";
import CommList from "./../comp/list";
import "./index.less";

const Previous = memo(() => {
    const [activeArr, setActiveArr] = useState([]);
    const [yearArr, setYearArr] = useState([]);
    const getList = id => {
        axios
            .get("/active/list")
            .then(res => {
                setActiveArr(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    };
    useEffect(() => {
        axios
            .get("/active/previous/menu")
            .then(res => {
                setYearArr(res.data.data);
                getList();
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    const chageTab = useCallback((index, tab) => {
        const _activeArr = [...activeArr];
        _activeArr[index].tab = tab;
        setActiveArr(_activeArr);
    });
    const changeYearIndex = index => {
        console.log(index);
        const _yearArr = [...yearArr];
        _yearArr.map(item => {
            item.isSelected = 0;
        });
        _yearArr[index].isSelected = 1;
        setYearArr(_yearArr);
        getList();
    };
    return (
        <div className="indexWrap">
            {yearArr.length > 0 && (
                <div className="nav">
                    {yearArr.map((item, index) => {
                        return (
                            <span
                                key={item.id + "=" + index}
                                className={item.isSelected === 1 ? "red" : ""}
                                onClick={() => changeYearIndex(index, item.id)}
                            >
                                {item.title}
                            </span>
                        );
                    })}
                </div>
            )}
            <div className="previousWrap">
                {activeArr.length > 0 && (
                    <CommList ListArr={activeArr} chageTab={chageTab} />
                )}
            </div>
        </div>
    );
});

export default Previous;
