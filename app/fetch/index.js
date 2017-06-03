import 'whatwg-fetch'
import 'es6-promise'

export function get(url) {
    return fetch(url,{Accept:"application/json"})
}

//fetch文件夹写的是前端从后台拿取数据
function toUrllencoded(obj) {
//将对象转化成formData格式(把对象转化成查询字符串)  {id:1,comment:2} =>id=1&comment=2
    let arr=[]
    for(let key in  obj){
        arr.push(`${key}=${obj[key]}`)
    }
    return arr.join('&')
}
export function post(url,obj) {
    return fetch(
        url,{
            method:'POST',
            headers:{//手动写请求头
             'Content-Type':'application/x-www-form-urlencoded'
            },
            body:toUrllencoded(obj)
        }


    )
}
