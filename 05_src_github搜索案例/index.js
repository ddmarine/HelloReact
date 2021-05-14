// 引入react核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom'
//引入App组件
import App from './App.jsx'  //也可以写成import App from './App' 

//渲染App到页面
ReactDOM.render(<App/>,document.getElementById('root'))



// import React from './module'
// console.log(React)
// const {Component} = React

// console.log(new Component())