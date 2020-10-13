/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-new */
import React, { memo, useState, useEffect } from "react";
import Swiper from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.min.css";
import "./index.less";

const Slider = memo(props => {
    const { sliderData } = props;
    const list = [0, 1, 2, 3, 4, 5, 6];
    useEffect(() => {
        new Swiper(".swiper-container", {
            navigation: {
                nextEl: ".banner_next",
                prevEl: ".banner_prev",
            },
            loop: true,
        });
    }, []);
    return (
        <div className="slide_section">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {sliderData.map(item => {
                        return (
                            <div className="swiper-slide" key={item.id}>
                                <a
                                    alt=""
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={window.baseUrl + item.imgUrl} />
                                </a>
                                <div className="banner_mask">
                                    {item.tag === "Hot" && (
                                        <span className="hot">
                                            <img src="./img/index/slider/hot.png" />
                                        </span>
                                    )}
                                    <span className="banner_text">
                                        {item.title}
                                    </span>
                                </div>
                                {/* <a href={item.path} alt="">
                                    <div className="bot_font">
                                        <div className="tag">{item.tag}</div>
                                        <div className="title">
                                            {item.title}
                                        </div>
                                    </div>
                                </a> */}
                            </div>
                        );
                    })}
                </div>
                <div className="swiper-button-next banner_next"></div>
                <div className="swiper-button-prev banner_prev"></div>
            </div>
        </div>
    );
});

export default Slider;
