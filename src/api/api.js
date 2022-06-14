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