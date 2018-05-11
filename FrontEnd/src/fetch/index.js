import axios from 'axios';
import Cookies from 'js-cookie';

const defaultConfig = {
    baseURL: '/api',
    timeout: 60 * 1000,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
}

const getConfig = cfg => ({
    ...cfg,
    headers: {
        Authorization: Cookies.get('authorization'),
    }
})


const http = (() => axios.create({
    ...defaultConfig,
}))()


function axiosGet(path, fetchConfig) {
    return http.get(path, getConfig(fetchConfig))
        .then(response => response.data)
}

function axiosPost(path, params, fetchConfig) {
    return http.post(path, params, getConfig(fetchConfig))
        .then(response => response.data)
}

function axiosDelete(path, fetchConfig) {
    return http.delete(path, getConfig(fetchConfig))
        .then(response => response.data)
}


//拦截器用来做对status的判断等等
// Add a request interceptor
// http.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     return config;
// }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
// });
// Add a response interceptor
http.interceptors.response.use(res => {
    // Do something with response data
    let Authorization = res.headers.authorization
    if (Authorization) {
        Cookies.set('authorization', Authorization)
    }
    return res;
}, err => {
    // Do something with response error
    let res = err.response
    if (res.status === 401) {
        console.log('logout')
        document.body.dispatchEvent(new Event('logout'))
    }
    return Promise.reject(err);
});

export default {
    get: axiosGet,
    post: axiosPost,
    delete: axiosDelete,
}