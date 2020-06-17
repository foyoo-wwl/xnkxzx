/*
 * @Author: your name
 * @Date: 2020-06-16 16:25:08
 * @LastEditTime: 2020-06-16 16:56:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \multi-entry-react-app\src\resource\mock\detail_1.js
 */
import Mock from "mockjs";
export default Mock.mock("/resource/content/detail1", {
    status: 200,
    data: {
        "title|10-20": "标题",
        "source|10-15": "来源",
        time: "@time",
        videoUrl: "@url",
        "abstract|40-60": "摘要",
        tag: ["tag1", "tag1", "tag1", "tag1", "tag1"],
        poster: "@url",
    },
    //data里的属性看不懂，需要详细看语法规范,博客链接:https://www.jianshu.com/p/4579f40e6108
});
