/* eslint-disable no-underscore-dangle */
import React, { memo, useState, useEffect, useCallback } from "react";
import axios from "axios";
import "../mock/listmock";

import CommList from "./../comp/list";

const Index = memo(() => {
    const [activeArr, setActiveArr] = useState([]);
    useEffect(() => {
        axios
            .get("/active/list")
            .then(res => {
                setActiveArr(res.data.data);
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
    return (
        <div className="indexWrap">
            <div className="activeWrap">
                {activeArr.length > 0 && (
                    <CommList ListArr={activeArr} chageTab={chageTab} />
                )}
            </div>
        </div>
    );
});

export default Index;
