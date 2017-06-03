import React,{Component} from 'react';
import './index.less'
export default class LoadMore extends Component{
    render(){
        return (
            <div className="has-more">
                {this.props.hasMore?<div ref="more" onClick={this.loadMore.bind(this)}>加载更多</div>:                <div>已经到底部啦………</div>
                }
            </div>
        )
    }
    componentDidMount(){
        this.fn=()=>{
            clearTimeout( this.timer)
          this.timer =  setTimeout(()=>{
                console.log('ok');
              //先判断是否正在加载，再判断按钮距离屏幕顶端的高度
              if(this.props.isLoading){
                  return
              }
              //console.log(this.refs.more);获取DOM元素
              let screen=window.screen.height  //获取屏幕的高度
              let top=this.refs.more.getBoundingClientRect().top//获取当前元素的位置（上下左右距离屏幕）
              if(top<screen){
                  this.props.loadMore()
              }
          },50) //50ms是每次鼠标滚轮的有效时间
        }
        window.addEventListener('scroll',this.fn)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.fn)
    }
    loadMore(){
        if(this.props.isLoading){
            //如果正在加载中（this.props.isLoading=true），不需要加载数据
            return
        }
        this.props.loadMore()
    }
}
