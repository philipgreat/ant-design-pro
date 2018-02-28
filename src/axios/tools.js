/**
 * Created by 叶子 on 2017/7/30.
 * http通用工具函数
 */
import axios from 'axios';
import { message } from 'antd';
import {SYSTEM_SHORT_NAME} from './config'
/**
 * 公用get请求
 * @param url       接口地址
 * @param msg       接口异常提示
 * @param headers   接口所需header配置
 */
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
export const get1 = ({ url, msg = '从服务器取得数据失败，请检查网络，或者咨询服务器管理员', headers }) =>
    axios.get(url, { headers: headers, withCredentials: true }).then(
        res => res.data)
        .catch(err => {
            console.log(url);
            message.warn(msg);
        });

export const get2 = ({ url, msg = '从服务器取得数据失败，请检查网络，或者咨询服务器管理员', headers }) => {

    const config = { method: "get", url: url, headers: headers, withCredentials: false };
    //res => {console.log(res.headers);console.log(res.data);return res.data;
    axios.get(url, headers).then(
        res => res.data
    ).catch(err => {
        console.log("err", err);
        console.log(url);
        message.warn(msg);
    });

}
axios.defaults.withCredentials = true
export const get3 = ({ url, msg = '接口异常', headers }) =>
    axios.get(url, { headers, withCredentials: false }).then(res => res.data).catch(err => {
        console.log(err);
        message.warn(msg);
    });

export const get = ({ url, msg = '接口异常', headers }) =>
    axios.get(url, headers).then(
        function (res) {
            console.log("xxxx", res.headers)

            return res.data;
        }).catch(err => {
            console.log(err);
            message.warn(msg);
        });


export const getURLPrefix = () => {
    const url = new URL(window.location)
    if (url.hostname === 'localhost') {
        //return `http://${url.hostname}:8080/naf/`
        return `http://clariones.doublechaintech.com/naf/`
        
    }
    if (url.hostname === "30.30.126.37") {
        return `http://${url.hostname}:8080/naf/`
    }
    return `${url.origin}/${SYSTEM_SHORT_NAME}/`
}
export const joinParameters = (parameters) => {
    const obj = parameters // {value1: 'prop1', value2: 'prop2', value3: 'prop3'}
    const arr = []
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            arr.push(`${key}=${encodeURIComponent(obj[key])}`)
        }
    }
    const result = arr.join(';')
    return result
}

export const joinPostParameters = (parameters) => {
    const obj = parameters // {value1: 'prop1', value2: 'prop2', value3: 'prop3'}
    const arr = []
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key]
            if (!Array.isArray(value)) {
                arr.push(key + '=' + encodeURIComponent(value))
            }
            for (const subKey in value) {
                const subvalue = value[subKey]
                arr.push(key + '=' + encodeURIComponent(subvalue))
            }
        }
    }
    const result = arr.join('&')
    return result
}

export const PREFIX = getURLPrefix()
/**
 * 公用post请求
 * @param url       接口地址
 * @param data      接口参数
 * @param msg       接口异常提示
 * @param headers   接口所需header配置
 */
export const post = ({ url, data, msg = '接口异常', headers }) =>
    axios.post(url, data, headers).then(res => res.data).catch(err => {
        console.log(err);
        message.warn(msg);
    });
