/**
 * Created by hhhh4 on 2017/5/31.
 */
import React,{Component} from 'react';
import HeaderComponent from '../../components/HeaderComponent/index'
import {connect} from 'react-redux'
import * as Actions from '../../actions/userInfo'
import {bindActionCreators} from 'redux'
import LoginComponent from '../../components/LoginComponent/index'
 class Login extends Component{
    constructor(){
        super()
        this.state={ //默认没有登录过
            login:false
        }
    }
    render(){
        return (
            <div>
                <HeaderComponent title="登录" history={this.props.history}></HeaderComponent>
                {this.state.login?<LoginComponent login={this.login.bind(this)}></LoginComponent>:<div></div>}
            </div>
        )
    }
    //写一个方法是登录的，将用户名存入redux中  传给子组件LoginComponent
     login(username){
         let info=this.props.userInfo
         info.username=username
         this.props.userActions.update(info)
         //如果是从购买进入，登录后需要调到购买页  encodeURIComponent('/buy')   "%2Fbuy"

         if(this.props.match.params.route){//
             this.props.history.push(decodeURIComponent(this.props.match.params.route))
         }else {
             this.props.history.push('/user')//登录成功跳转到用户页面

         }
     }

     componentDidMount(){
        this.checkLogin()
    }
    checkLogin(){//检查是否登录
        if(this.props.userInfo.username){//登陆过
            return this.props.history.push('/user')
        }
        this.setState({ //没有登录  显示登录组件
            login:true
        })
    }
}
export default connect(
    state=>{
        return {
            userInfo:state.userInfo
        }
    },
    dispatch=>{
        return {
            userActions:bindActionCreators(Actions,dispatch)
        }
    }
)(Login)
