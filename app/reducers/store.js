import * as Types from '../action-types/store'

let initState=[]
export function store(state=initState,action) {
    switch (action.type){
        case Types.ADD_STORE:
            return [...state,action.data]  //添加传递新的id放到数组中 返回一个新的数组
        case Types.REMOVE_STORE:
            return state.filter(item=>{
                return action.data!=item
            })
        default:
            return state;
    }
}