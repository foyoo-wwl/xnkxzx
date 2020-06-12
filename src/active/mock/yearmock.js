/*
 * @Author: your name
 * @Date: 2020-06-09 10:55:22
 * @LastEditTime: 2020-06-11 14:31:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \multi-entry-react-app\src\active\mock\yearmock.js
 */
import Mock from "mockjs";
export default Mock.mock("/active/previous/menu", {
    status: 200,
    data: [
        {
            year: "2019",
            title: "2019",
            "id|1-100": 100,
            isSelected: 1,
        },
        {
            year: "2018",
            title: "2018",
            "id|1-100": 100,
            isSelected: 0,
        },
        {
            year: "2017",
            title: "2017",
            "id|1-100": 100,
            isSelected: 0,
        },
        {
            year: "2016",
            title: "2016",
            "id|1-100": 100,
            isSelected: 0,
        },
    ],
});
