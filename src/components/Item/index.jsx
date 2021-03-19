import React, { Component } from 'react';
import './index.css'

class Item extends Component {
	//这样写，会不经任何操作，直接输出，不对
	// handleMouse = (flag) =>{
	// 	console.log(flag)
	// }

	//要写成这样 
	// handleMouse = (flag) =>{
	// 	return () => {
	// 		console.log(flag)
	// 	}
	// }

	//这样可以把鼠标状态储存起来
	state = {mouse:false}

	handleMouse = (flag) => {
		return ()=>{
			this.setState({mouse:flag})
			console.log(this.state.mouse)
		}
	}

	render() {
		const {id,name,done} = this.props
		const {mouse} = this.state
		return (
			<li style={{backgroundColor:mouse ? '#ddd' : 'white'}}
			onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
				<label>
					{/* 这样写是不能修改的 ，要加上onchange*/}
					{/* <input type="checkbox" checked={done}/> */}
					{/* 这样可以 */}
					<input type="checkbox" defaultChecked={done}/>
					<span>{name}</span>
				</label>
				<button className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
			</li>
		)
	}
}

export default Item