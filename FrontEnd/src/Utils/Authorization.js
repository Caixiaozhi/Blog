import Cookies from 'js-cookie'

export function submitLogout(){
    //TODO:发请求给后端，后端把authorization拉到黑名单
    Cookies.remove('authorization')
    console.log('logo out')
}