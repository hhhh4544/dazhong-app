import React,{Component} from 'react';
import HeaderComponent from '../../components/HeaderComponent/index'
import {connect} from 'react-redux'
import UserInfo from '../../components/UserInfo/index'
import OrderList from './subpage/OrderList'
 class User extends Component{

    render(){
        return (
            <div>
                <HeaderComponent back="/" title="用户信息" history={this.props.history}></HeaderComponent>
                <UserInfo userInfo={this.props.userInfo}></UserInfo>
                <OrderList username={this.props.userInfo.username}></OrderList>
            </div>
        )
    }
}
export default connect(
    state=>{
        return {
            userInfo:state.userInfo
        }
    }
)(User)
