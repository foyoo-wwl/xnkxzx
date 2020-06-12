/*
 * @Author: your name
 * @Date: 2020-06-05 15:31:07
 * @LastEditTime: 2020-06-11 09:32:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \multi-entry-react-app\src\museum\mock\kxhdMenu.js
 */
import Mock from "mockjs";
export default Mock.mock("/resource/etzx/menu", {
    status: 200,
    data: [
        {
            name: "计算机科学",
            "subjectId|1-100": 100,
            isSelected: 1,
        },
        {
            name: "开源硬件",
            "subjectId|1-100": 100,
            isSelected: 0,
        },
        {
            name: "工程",
            "subjectId|1-100": 100,
            isSelected: 0,
        },
        {
            name: "创客手工",
            "subjectId|1-100": 100,
            isSelected: 0,
        },
        {
            name: "机器人",
            "subjectId|1-100": 100,
            isSelected: 0,
        },
        {
            name: "物理",
            "subjectId|1-100": 100,
            isSelected: 0,
        },
        {
            name: "生物",
            "subjectId|1-100": 100,
            isSelected: 0,
        },
        {
            name: "地理",
            "subjectId|1-100": 100,
            isSelected: 0,
        },
    ],
    //data里的属性看不懂，需要详细看语法规范,博客链接:https://www.jianshu.com/p/4579f40e6108
});
