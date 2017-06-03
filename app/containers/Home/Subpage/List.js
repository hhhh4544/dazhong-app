import React,{Component} from 'react';
import {getList} from '../../../fetch/home'
import ListComponent from '../../../components/ListComponents/index'
import LoadMore from '../../../components/LoadMore/index'
export default class List extends Component{
    constructor(){
        super()
        this.state={
            hasMore:true,//是否有更多
            data:[],
            page:0,
            isLoading:true
        }
    }
    render(){
        return (
            <div>
                {this.state.data.length?<ListComponent data={this.state.data} hasMore={this.state.hasMore}/> :<div>loading</div>}
                <LoadMore hasMore={this.state.hasMore} loadMore={this.loadMore.bind(this)} isLoading={this.state.isLoading}></LoadMore>>
            </div>
        )
    }
    componentDidMount(){
        this.processData(getList(this.props.cityName,0))
    }
    loadMore(){
        console.log('loading more.......')
        this.setState({
            state:this.state.page+1,
            isLoading:true //加载的时候
        },()=>{
            this.processData(getList(this.props.cityName,this.state.page))
        })
    }
    //处理成功后的逻辑
    processData(result){
        result.then(res=>res.json()).then(({hasMore,data})=>{
            //console.log(data)
            this.setState({
                hasMore,
                data:this.state.data.concat(data),
                isLoading:false //数据加载完毕
            })
        })
    }
}
/* console.log(data)
Object
 distance
 :
 "120m"
 id
 :
 "34886479613228927"
 img
 :
 "http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201638030-473660627.png"
 mumber
 :
 "389"
 price
 :
 "28"
 subTitle
 :
 "叫我汉堡大大，还你多彩口味"
 title
 :
 "汉堡大大"
 __proto__
 :
 Object*/
