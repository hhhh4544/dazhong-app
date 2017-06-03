import * as Types from '../action-types/userInfo'
//创建action,发射数据
export function update(data) {
    return {
        type:Types.UPDATE_CITY,
        data
    }
}
