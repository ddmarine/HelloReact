import React, { Component } from 'react';
import PropTypes from 'prop-types' // 对数据进行判断限制的插件
import Item from '../Item';
import './index.css'

class List extends Component {

	//对接收的props进行：类型、必要性的限制
	static propTypes = {
		todos: PropTypes.array.isRequired,
		updateTodo: PropTypes.func.isRequired,
		deleteTodo: PropTypes.func.isRequired
	}

	render() {
		const {todos, updateTodo, deleteTodo} = this.props
		return (
			<ul className="todo-main">
				{
					todos.map( todo => {
						//return <Item key={todo.id} id={todo.id} name={todo.name} done={todo.done}/>
						// 上面等于下面，
						return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
					})
				}
			</ul>
		)
	}
}

export default List