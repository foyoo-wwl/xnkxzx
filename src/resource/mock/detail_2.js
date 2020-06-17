/*
 * @Author: your name
 * @Date: 2020-06-17 09:15:35
 * @LastEditTime: 2020-06-17 09:35:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \multi-entry-react-app\src\resource\mock\detail_2.js
 */
import Mock from "mockjs";
export default Mock.mock("/resource/content/detaillist", {
    status: 200,
    data: {
        "title|4-8": "标题",
        "source|10-15": "来源",
        time: "@time",
        videoUrl: "@url",
        tag: ["tag1", "tag1", "tag1", "tag1", "tag1"],
        poster: "@url",
        list: [
            {
                "videoId|1-100": 100,
                videoUrl: "@url",
                "videoName|4-8": "视频名称",
            },
            {
                "videoId|1-100": 100,
                videoUrl: "@url",
                "videoName|4-8": "视频名称",
            },
            {
                "videoId|1-100": 100,
                videoUrl: "@url",
                "videoName|4-8": "视频名称",
            },
            {
                "videoId|1-100": 100,
                videoUrl: "@url",
                "videoName|4-8": "视频名称",
            },
            {
                "videoId|1-100": 100,
                videoUrl: "@url",
                "videoName|4-8": "视频名称",
            },
            {
                "videoId|1-100": 100,
                videoUrl: "@url",
                "videoName|4-8": "视频名称",
            },
            {
                "videoId|1-100": 100,
                videoUrl: "@url",
                "videoName|4-8": "视频名称",
            },
            {
                "videoId|1-100": 100,
                videoUrl: "@url",
                "videoName|4-8": "视频名称",
            },
        ],
    },
    //data里的属性看不懂，需要详细看语法规范,博客链接:https://www.jianshu.com/p/4579f40e6108
});
