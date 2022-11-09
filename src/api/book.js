import request from '../utils/request'

//
export function novelList(params) {
    return request.get('/novel', { params });
}
//
export function searchBooks(params) {
    return request.get('/novel/search', { params });
}

