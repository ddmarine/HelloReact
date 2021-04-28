import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {

	getStudentData = () => {  
		// 方法1.在package.json里配置了代理，这样就不会跨域了
		// 如果是http://localhost:3000/index.html 就会输出public文件里的index.html 因为代理了，会只指向自己
		// 但这样只能指定一个域名跨域
		// 方法1 这样写   axios.get('http://localhost:3000/students').then(


		// 方法2 在setupProxy.js 里进行分别配置 然后在这里加上代理地址 例如这里的/api1
		// 方法2 这样写能分配多个域名跨域
		axios.get('http://localhost:3000/api1/students').then(

			response => {console.log('成功了students', response.data);},
			error => {console.log('失败了students', error)}
		)


	}

	getCarData = () => {  // 在package.json里配置了代理，这样就不会跨域了
		// 如果是http://localhost:3000/index.html 就会输出public文件里的index.html 因为代理了，会只指向自己
		axios.get('http://localhost:3000/api2/cars').then(
			response => {console.log('成功了cars', response.data);},
			error => {console.log('失败了cars', error)}
		)
	}

	render() {
		return (
			<div>
				<button onClick={this.getStudentData}>点我获取学生数据</button>
				<button onClick={this.getCarData}>点我获取汽车数据</button>				
			</div>
		);
	}
}

export default App;