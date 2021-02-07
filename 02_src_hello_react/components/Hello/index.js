import React,{Component} from 'react'
import hello from './index.module.css'  //样式模块化，这样的话就避免样式重复覆盖

export default class Hello extends Component{
	render(){
		return <h2 className={hello.title}>Hello,React!!!</h2>
	}
}