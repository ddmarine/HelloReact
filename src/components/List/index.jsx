import React, { Component } from 'react';
// 消息定位与发布技术 用于兄弟组件之间通信
import PubSub from 'pubsub-js'
import './index.css';

class List extends Component {
	state = { // 初始化状态
		users:[], // users初始值为数组
		isFirst:true, // 是否为第一次打开页面
		isLoading:false, // 标识是否处于加载中
		err:'', // 储存请求相关的错误信息 
	}

	componentDidMount() {
		this.token = PubSub.subscribe('jb',(_, stateObj)=>{
			console.log('list组件收到数据了', stateObj)
			this.setState(stateObj)
		})
	}

	componentWillUnmount() {
		PubSub.unsubscribe(this.token)
	}


  render() {
		const {users,isFirst,isLoading,err} = this.state


    return (
			<div className="row">
				{
					isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
					isLoading ? <h2>Loading......</h2> :
					err ? <h2 style={{color:'red'}}>{err}</h2> :
					users.map((userObj)=>{
						return(
							<div key={userObj.id} className="card">
								<a rel="noreferrer" href={userObj.html_url} target="_blank">
									<img src={userObj.avatar_url} style={{width: '100px'}}/>
								</a>
								<p className="card-text">{userObj.login}</p>
							</div>
						)
					})
				}
			</div>
    );
  }
}

export default List;