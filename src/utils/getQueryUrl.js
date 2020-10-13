/*
 * @Author: your name
 * @Date: 2020-06-19 16:26:08
 * @LastEditTime: 2020-06-19 16:26:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \multi-entry-react-app\src\utils\getQueryUrl.js
 */
const getQueryVariable = variable => {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split("=");
        if (pair[0] === variable) {
            return pair[1];
        }
    }
    return false;
};

export default getQueryVariable;
