import React,{Component} from 'react';
import HomeHeader from '../../components/HomeHeader/index'
import Slider from '../../components/Slider/index'
import Ad from '../../containers/Home/Subpage/Ad'
import List from '../../containers/Home/Subpage/List'
import {connect} from 'react-redux'

 class Home extends Component{
    render(){
        return (
            <div>
                <HomeHeader history={this.props.history} cityName={this.props.userInfo.cityName}></HomeHeader>
                <Slider></Slider>
                <Ad></Ad>
                <List cityName={this.props.userInfo.cityName}></List>
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
)(Home)

