import React,{Component} from 'react';
import './index.less'
export default class ChooseCity extends Component{
    render(){
        return (

            <div className="city">
                <h3>选择城市</h3>
                <ul>
                    <li onClick={this.props.changeCity.bind(this,'北京')}>北京</li>
                    <li onClick={this.props.changeCity.bind(this,'上海')}>上海</li>
                    <li onClick={this.props.changeCity.bind(this,'广州')}>广州</li>
                    <li onClick={this.props.changeCity.bind(this,'潜江')}>潜江</li>
                    <li onClick={this.props.changeCity.bind(this,'厦门')}>厦门</li>
                    <li onClick={this.props.changeCity.bind(this,'香港')}>香港</li>
                </ul>
            </div>
        )
    }
}
//   100/6个边   1.5%   3个项  30.333%
