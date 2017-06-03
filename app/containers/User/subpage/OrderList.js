
import React,{Component} from 'react';
import {getorderList,postComment} from '../../../fetch/orderList'
import OrderListComponent from '../../../components/OrderListComponent'
export default class OrderList extends Component{
    constructor(){
        super()
        this.state={
            data:[]
        }
    }
    render(){
        return (
            <div>
                {this.state.data.length?<OrderListComponent data={this.state.data} commitComment={this.commitComment.bind(this)}></OrderListComponent>:<div>loading</div>}
            </div>
        )
    }
    //提交评价到后台 (内容 商户ID callback更改状态)
    commitComment(id,comment,callback){
        console.log(id, comment);
        postComment({id,comment}).then(res=>res.json()).then(data=>{
            callback()
        })
    }
    componentDidMount(){
        console.log('ok')
        getorderList(this.props.username).then(res=>res.json()).then(data=>{
            console.log(data);
            this.setState({data})
        })
    }
}
