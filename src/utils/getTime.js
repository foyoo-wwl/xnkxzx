/*
 * @Author: your name
 * @Date: 2020-08-20 15:29:22
 * @LastEditTime: 2020-08-20 15:32:01
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \xnkxzx\src\utils\getTime.js
 */
const getTime = date => {
    const _year = new Date(date.time * 1000).getFullYear();
    const _mon = new Date(date.time * 1000).getMonth();
    const _day = new Date(date.time * 1000).getDate();
    const _hour = new Date(date.time * 1000).getHours();
    const _min = new Date(date.time * 1000).getMinutes();
    return `${_year}-${_mon}-${_day}   ${_hour}:${_min}`;
};

export default getTime;
