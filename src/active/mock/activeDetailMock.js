/*
 * @Author: your name
 * @Date: 2020-06-09 11:05:05
 * @LastEditTime: 2020-06-11 15:01:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \multi-entry-react-app\src\active\mock\activeDetailMock.js
 */

import Mock from "mockjs";
export default Mock.mock("/active/detail", {
    status: 200,
    data: {
        banner: {
            imgUrl: "@url",
            state: "ing",
            time: "@time",
            bannerTitle: "标题标题标题标题标题标题",
            abstract:
                "标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题",
            path: "@url",
        },
        resource: {
            teacher: {
                "title|10-20": "标题",
                path: "@url",
                tag: "recommend",
                imgUrl: "@url",
                joinNum: 12306,
                star: 4,
                comment: 12152,
                "id|1-100": 100,
            },
            student: {
                title: "标题标题标题标题标题标题",
                studentList: {
                    list: [
                        {
                            "id|1-100": 100,
                            title: "标题标题标题标题标题标题",
                            path: "@url",
                        },
                        {
                            "id|1-100": 100,
                            title: "标题标题标题标题标题标题",
                            path: "@url",
                        },
                        {
                            "id|1-100": 100,
                            title: "标题标题标题标题标题标题",
                            path: "@url",
                        },
                        {
                            "id|1-100": 100,
                            title: "标题标题标题标题标题标题",
                            path: "@url",
                        },
                    ],
                },
            },
            number: {
                country: 278,
                teacher: 278,
                students: 278,
                teams: 278,
            },
        },
    },
});
