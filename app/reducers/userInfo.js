import * as Types from '../action-types/userInfo'



let initState={}

//接受action传过来的数据
export function userInfo(state=initState,action) {
    //action对应的是文件夹actions下的userInfo  它有2个属性 data和type
    switch(action.type){
        case Types.UPDATE_CITY:
            return action.data;
        default:
            return state
    }
}
