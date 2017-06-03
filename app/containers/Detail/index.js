import React,{Component} from 'react';
import HeaderComponent from '../../components/HeaderComponent/index'
import Buy from '../../components/Buy/index'
import Info from './subpage/Info.js'
import Comment from './subpage/Comment'
import {connect} from 'react-redux'
import * as Actions from '../../actions/store'
import {bindActionCreators} from 'redux'
 class Detail extends Component{
    constructor(){
        super()
        this.state={
            isStore:false
        }
    }

     render(){
        return (
            <div>
                <HeaderComponent title="商户详情" history={this.props.history}>
                </HeaderComponent>
                <Info id={this.props.match.params.id}></Info>
                <Buy buy={this.buy.bind(this)} store={this.store.bind(this)} isStore={this.state.isStore}></Buy>
                <Comment id={this.props.match.params.id}></Comment>
            </div>
        )
    }
     componentDidMount(){//收藏列表[]
         let id=this.props.match.params.id
         //如果数组中有true 则返回true
         let flag=this.props.store.some(item=>item==id) //store存放着商品的信息
         if(flag){
             this.setState({
                 isStore:flag
             })
         }

     }
     buy(){//如果登录成功，点击购买，跳到用户页
         let flag=this.checkLogin()
         if(flag){
             this.props.history.push('/user')
         }else {//encodeURIComponent 解析路径
             this.props.history.push('/login/'+encodeURIComponent('/detail/'+this.props.match.params.id))
         }

     }
     store(){//收藏 先验证是否登录
         console.log(this.props.store);
         let flag=this.checkLogin()
         if(!flag){//如果没有登录
             this.props.history.push('/login/'+encodeURIComponent('/detail/'+this.props.match.params.id))
         }
         let id=this.props.match.params.id
         if(this.state.isStore){//收藏过-》移除掉
             this.props.storeActions.remove(id)
         }else {//未收藏-》收藏
             this.props.storeActions.add(id)
         }
         this.setState({
             isStore:!this.state.isStore
         })
     }

     checkLogin(){
         if( this.props.userInfo.username){
             return true
         }
         return false
     }

 }
    export default connect(
        state=>{
            return {
                userInfo:state.userInfo,
                store:state.store
            }
        },
        dispatch=>{//storeActions
            return {
               storeActions:bindActionCreators(Actions,dispatch)
            }
        }
    )(Detail)


