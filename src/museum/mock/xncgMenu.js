/*
 * @Author: your name
 * @Date: 2020-06-09 15:53:57
 * @LastEditTime: 2020-06-09 16:17:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \multi-entry-react-app\src\museum\mock\xncgMenu.js
 */
import Mock from "mockjs";
export default Mock.mock("/museum/xncg/menu", {
    status: 200,
    data: [
        {
            name: "亚洲",
            "continentId|1-100": 100,
            isSelectd: 1,
            list: [
                {
                    name: "@name",
                    "countryId|1-100": 100,
                    isSelectd: 1,
                },
                {
                    name: "@name",
                    "countryId|1-100": 100,
                    isSelectd: 0,
                },
                {
                    name: "@name",
                    "countryId|1-100": 100,
                    isSelectd: 0,
                },
                {
                    name: "@name",
                    "countryId|1-100": 100,
                    isSelectd: 0,
                },
                {
                    name: "@name",
                    "countryId|1-100": 100,
                    isSelectd: 0,
                },
            ],
        },
        {
            name: "欧洲",
            "continentId|1-100": 100,
            isSelectd: 0,
            list: [
                {
                    name: "@name",
                    "countryId|1-100": 100,
                    isSelectd: 1,
                },
                {
                    name: "@name",
                    "countryId|1-100": 100,
                    isSelectd: 0,
                },
                {
                    name: "@name",
                    "countryId|1-100": 100,
                    isSelectd: 0,
                },
                {
                    name: "@name",
                    "countryId|1-100": 100,
                    isSelectd: 0,
                },
                {
                    name: "@name",
                    "countryId|1-100": 100,
                    isSelectd: 0,
                },
            ],
        },
        {
            name: "北美洲",
            "continentId|1-100": 100,
            isSelectd: 0,
            list: [
                {
                    name: "@name",
                    "countryId|1-100": 100,
                    isSelectd: 1,
                },
                {
                    name: "@name",
                    "countryId|1-100": 100,
                    isSelectd: 0,
                },
                {
                    name: "@name",
                    "countryId|1-100": 100,
                    isSelectd: 0,
                },
                {
                    name: "@name",
                    "countryId|1-100": 100,
                    isSelectd: 0,
                },
                {
                    name: "@name",
                    "countryId|1-100": 100,
                    isSelectd: 0,
                },
            ],
        },
    ],
});
