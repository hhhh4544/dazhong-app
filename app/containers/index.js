import React,{Component} from 'react';
import RouterMap from '../routers/index';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Actions from '../actions/userInfo' //获取所有ActionCreators组成的对象
import {getStorage} from '../local'
 class App extends Component{
    constructor(){
        super();
        this.state={
            done:false
        }
    }
    render(){
        return (
            <div>
                {this.state.done?<RouterMap/>:<div>loading</div>}
            </div>
        )
    }
    componentDidMount(){
       /*setTimeout(()=>this.setState({
           done:true
       }),3000)*/
       let cityName=getStorage('cityName')
        if(cityName==undefined){//设置默认值
            cityName='杭州'
        }
        this.props.userActions.update({cityName})
        this.setState({
            done:true
        })
        /*console.log(this.props.userActions.update({
            cityName:'london'
        }))*/
    }
}

export default connect(
    state=>{ //mapStateToprops
        return {}
    },
    dispatch=>{//mapDispatchToprops
        return {
            userActions:bindActionCreators(Actions,dispatch)
        }
    }

)(App)
