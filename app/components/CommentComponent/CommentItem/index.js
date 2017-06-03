import React,{Component} from 'react';
import './index.less'
import Star from '../../../components/Star/index'
export default class CommentItem extends Component{
    render(){
        let {username,comment,star} =this.props.data
        return (
            <div className="comment-item">
                <div>
                    <i className="iconfont icon-yonghufill"></i>
                    {username}
                </div>
                <Star count={star}></Star>
                <div>
                    {comment}
                </div>
            </div>
        )
    }
}
