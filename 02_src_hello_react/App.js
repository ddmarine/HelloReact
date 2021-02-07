//创建“外壳”组件App
import React from 'react'
import Hello from './components/Hello'  //文件名为index的话，直接指向文件夹就行了
import Welcome from './components/Welcome/Welcome'

// 写法1
// class App extends React.Component{
// 	render(){
// 		return(
// 			<div>
// 				Hello,react!
// 			</div>
// 		)
// 	}
// }

// // 暴露App组件
// export default App


export default class App extends React.Component{
	render(){
		return(
			// <div>
			// 	Hello,react!
			// </div>
			<div>
				<Hello/>
				<Welcome/>
			</div>

		)
	}
}
