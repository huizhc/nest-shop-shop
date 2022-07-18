import request from '@/utils/request';

export function indexData() {
    return request({
        url: '/base/index',
        method: 'get',
    })
}
export function categoryList(params) {
    return request({
        url: '/base/category/list',
        method: 'get',
        params
    })
}
export function productDetail(params) {
    return request({
        url: `/base/product/${params.id}`,
        method: 'get',
        params
    })
}
export function productGetImagelist(params) {
    return request({
        url: `/base/product/getImagelist`,
        method: 'get',
        params
    })
}
export function passSendCode(params) {
    return request({
        url: `/base/pass/sendCode`,
        method: 'get',
        params
    })
}
export function passGetCode(params) {
    return request({
        url: `/base/pass/getCode`,
        method: 'get',
        params
    })
}
export function passRegisterStep2(params) {
    return request({
        url: `/base/pass/registerStep2`,
        method: 'get',
        params
    })
}
export function passValidatePhoneCode(params) {
    return request({
        url: `/base/pass/validatePhoneCode`,
        method: 'get',
        params
    })
}
export function passRegisterStep3(params) {
    return request({
        url: `/base/pass/registerStep3`,
        method: 'get',
        params
    })
}
export function passDoRegister(data) {
    return request({
        url: `/base/pass/doRegister`,
        method: 'post',
        data
    })
}
export function passDoLogin(data) {
    return request({
        url: `/base/pass/doLogin`,
        method: 'post',
        data
    })
}
export function passUserInfo(data) {
    return request({
        url: `/base/pass/userInfo`,
        method: 'post',
        data
    })
}
/**地址管理 start */

export function addressAddAddress(data) {
    return request({
        url: `/base/address/addAddress`,
        method: 'post',
        data
    })
}
export function addressGetOneAddressList(params) {
    return request({
        url: `/base/address/getOneAddressList`,
        method: 'get',
        params
    })
}
export function addressDoEditAddressList(data) {
    return request({
        url: `/base/address/doEditAddressList`,
        method: 'post',
        data
    })
}
export function addressChangeDefaultAddress(params) {
    return request({
        url: `/base/address/changeDefaultAddress`,
        method: 'get',
        params
    })
}
export function addressList(params) {
    return request({
        url: `/base/address/list`,
        method: 'get',
        params
    })
}

/**地址管理 end */



/**支付管理 start*/

export function buyOrderSign(params) {
    return request({
        url: `/base/buy/orderSign`,
        method: 'get',
        params
    })
}
export function buyDoOrder(data) {
    return request({
        url: `/base/buy/doOrder`,
        method: 'post',
        data
    })
}

/**支付管理 end*/