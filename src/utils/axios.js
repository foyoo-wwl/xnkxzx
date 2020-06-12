/* eslint-disable no-underscore-dangle */
/*
 * @Author: your name
 * @Date: 2020-06-08 14:44:36
 * @LastEditTime: 2020-06-11 15:54:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \multi-entry-react-app\src\utils\axios.js
 */

import axios from "axios";
// import originJsonp from "jsonp";
let BaseUrl = "http://kxsixty.scimall.org/index.php?";
let axiosUrl = "http://edusoho.yanmeiculture.com/api/index";

// export function Axios(data) {
//     axiosUrl = window.baseAxiosUrl;
//     axiosUrl += (axiosUrl.indexOf("?") < 0 ? "?" : "&") + param(data);
//     return new Promise((resolve, reject) => {
//         axios
//             .get(axiosUrl)
//             .then(response => {
//                 resolve(response.data);
//             })
//             .catch(error => {
//                 reject(error);
//             });
//     });
// }
// export function AxiosList() {
//     axiosUrl = "./api/list.json";
//     return new Promise((resolve, reject) => {
//         axios
//             .get(axiosUrl, {
//                 withCredentials: true,
//             })
//             .then(response => {
//                 resolve(response.data);
//             })
//             .catch(error => {
//                 reject(error);
//             });
//     });
// }

export function axiosPost(obj) {
    var instance = axios.create(
        {
            headers: {
                "content-type":
                    "application/x-www-form-urlencoded;charset=UTF-8",
                Accept: "application/vnd.edusoho.v2+json",
            },
        },
        {
            withCredentials: false,
        }
    );
    return new Promise((resolve, reject) => {
        const _url = axiosUrl;
        instance
            .post(_url, obj)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}
export function axiosGet(url) {
    var instance = axios.create(
        {
            headers: {
                "content-type":
                    "application/x-www-form-urlencoded;charset=UTF-8",
                Accept: "application/vnd.edusoho.v2+json",
            },
        },
        {
            withCredentials: false,
        }
    );
    return new Promise((resolve, reject) => {
        instance
            .get(url)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

function param(data) {
    let url = "";
    for (let k in data) {
        let value = data[k] !== undefined ? data[k] : "";
        url += "&" + k + "=" + encodeURIComponent(value);
    }
    return url ? url.substring(1) : "";
}

// export function jsonp() {
//     const _url = window.baseUrl2 + "index.php/api/lzs/hd65";
//     return new Promise((resolve, reject) => {
//         originJsonp(_url, (err, data) => {
//             if (!err) {
//                 resolve(data);
//             } else {
//                 reject(err);
//             }
//         });
//     });
// }

// export function jsonpInit() {
//     const _url = window.baseUrl + "index.php?g=&m=Hd65n&a=statusApi";
//     return new Promise((resolve, reject) => {
//         originJsonp(_url, (err, data) => {
//             if (!err) {
//                 resolve(data);
//             } else {
//                 reject(err);
//             }
//         });
//     });
// }

// export function jsonpCode() {
//     const _url = window.baseUrl + "index.php?g=&m=Hd65n&a=showCode";
//     return new Promise((resolve, reject) => {
//         originJsonp(_url, (err, data) => {
//             if (!err) {
//                 resolve(data);
//             } else {
//                 reject(err);
//             }
//         });
//     });
// }

// export function AxiosJson(url) {
//     return new Promise((resolve, reject) => {
//         axios
//             .get(url, {
//                 withCredentials: true,
//             })
//             .then(response => {
//                 resolve(response.data);
//             })
//             .catch(error => {
//                 reject(error);
//             });
//     });
// }
