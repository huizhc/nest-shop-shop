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