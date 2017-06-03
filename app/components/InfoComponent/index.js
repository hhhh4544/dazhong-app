import React,{Component} from 'react';
//<div dangerouslySetInnerHTML={{__html:desc}}> 将html代码展示在页面上
import Star from '../Star/index'
import './index.less'
export default class InfoComponent extends Component{
    render(){
        let {img,price,title,subTitle,desc,star}=this.props.data
        return (
            <div className="info-component">
                <div className="info-list">
                    <img src={img} alt=""/>
                    <div>
                        {title}
                        <div className="info-star">
                            <Star count={star}></Star>
                            <span>￥{price}</span>
                        </div>
                        <p>{subTitle}</p>
                    </div>
                </div>
                <br/>
                <hr/>
                <div dangerouslySetInnerHTML={{__html:desc}}>
                </div>


            </div>
        )
    }
}
