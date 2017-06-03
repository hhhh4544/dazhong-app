/**
 * Created by hhhh4 on 2017/5/31.
 */
import React,{Component} from 'react';
import {getInfo} from '../../../fetch/detail'

import  InfoComponent  from '../../../components/InfoComponent/index.js'
export default class Info extends Component{
    constructor(){
        super()
        this.state={
            data:false
        }
    }
    componentDidMount(){
        getInfo(this.props.id).then(res=>res.json()).then(data=>{
            this.setState({data})
        })
    }
    render(){
        return (
            <div>
                {this.state.data?<InfoComponent data={this.state.data}></InfoComponent>:
                <div>loading</div>}
            </div>
        )
    }
}

