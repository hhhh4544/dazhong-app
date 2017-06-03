
import * as Types from '../action-types/store'


//actioncreation 创建函数的方法
export function add(id) {
    return{
        type:Types.ADD_STORE,
        data:id
    }
}

export function remove(id) {
    return{
        type:Types.REMOVE_STORE,
        data:id
    }
}
