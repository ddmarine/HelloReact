import React, { Component } from 'react';
import './index.css'

class Footer extends Component {

	// 全选checkbox的回调
	handleCheckAll = (event)=>{
		console.log(event)
		this.props.checkAllTodo(event.target.checked)
	}


	handleCheckAllDone = () =>{
		this.props.clearAllDone()
	}

	render() {
		const {todos} = this.props
		// 已完成的个数  
		// reduce是ES6的数组统计方法
		const doneCount = todos.reduce((pre,todo)=>{return pre + (todo.done ? 1 : 0 )},0)
		console.log('%%', doneCount)
		// 总数

		console.log(todos)
		const total = todos.length


		return (
			<div className="todo-footer">
				<label>
					<input type="checkbox" onChange={this.handleCheckAll}
					checked={doneCount === total && total !== 0 ? true:false}/>
				</label>
				<span>
					<span>已完成{doneCount}</span> / 全部{total}
				</span>
				<button onClick={this.handleCheckAllDone} className="btn btn-danger">清楚已完成任务</button>
			</div>
		);
	}
}

export default Footer;