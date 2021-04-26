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
	state = {mouse:false}  // 标识鼠标移入、移出


	// 鼠标移入、移出的回调
	handleMouse = (flag) => {
		return ()=>{
			this.setState({mouse:flag})
			//console.log(this.state.mouse)
		}
	}

	//勾选、取消某一个todo的回调
	handleCheck = (id) => {
		return (event)=>{
			console.log(id, event.target.checked)
			console.log(this.props)
			this.props.updateTodo(id,event.target.checked)
			//this.props.updateTodo()
		}
	}

	handleDelete = (id) => {
		console.log('通知App删除', id)

		if(window.confirm('确定删除吗？')) {
			this.props.deleteTodo(id)
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
					<input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
					<span>{name}</span>
				</label>
				<button onClick={()=>{this.handleDelete(id)}} className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
			</li>
		)
	}
}

export default Item