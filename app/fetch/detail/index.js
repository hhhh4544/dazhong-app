
import {get} from '../index'
export function getInfo(id) {
    return get('/api/detail/info/'+id)
}

/*
function get(url) {
    return fetch(url,{Accept:"application/json"})
}
*/



export function getComment(id,page) {
    return get('/api/detail/comment/'+id+'/'+page)
}