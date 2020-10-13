/*
 * @Author: your name
 * @Date: 2020-06-25 16:27:45
 * @LastEditTime: 2020-06-25 16:56:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xnkxzx\src\content\listArticleMock.js
 */

import Mock from "mockjs";
export default Mock.mock("/listArticle", {
    status: 200,
    data: {
        list: [
            {
                type: 1,
                id: 1,
                "title|10-15": "标题",
                publishedTime: "@time",
                "desc|200-400": "内容",
            },
            {
                type: 1,
                id: 2,
                "title|10-15": "标题",
                publishedTime: "@time",
                "desc|200-400": "内容",
            },
            {
                type: 1,
                id: 3,
                "title|10-15": "标题",
                publishedTime: "@time",
                "desc|200-400": "内容",
            },
            {
                type: 1,
                id: 4,
                "title|10-15": "标题",
                publishedTime: "@time",
                "desc|200-400": "内容",
            },
            {
                type: 1,
                id: 5,
                "title|10-15": "标题",
                publishedTime: "@time",
                "desc|200-400": "内容",
            },
            {
                type: 1,
                id: 6,
                "title|10-15": "标题",
                publishedTime: "@time",
                "desc|200-400": "内容",
            },
            {
                type: 1,
                id: 7,
                "title|10-15": "标题",
                publishedTime: "@time",
                "desc|200-400": "内容",
            },
            {
                type: 1,
                id: 8,
                "title|10-15": "标题",
                publishedTime: "@time",
                "desc|200-400": "内容",
            },
            {
                type: 1,
                id: 9,
                "title|10-15": "标题",
                publishedTime: "@time",
                "desc|200-400": "内容",
            },
            {
                type: 1,
                id: 10,
                "title|10-15": "标题",
                publishedTime: "@time",
                "desc|200-400": "内容",
            },
        ],
    },
});
