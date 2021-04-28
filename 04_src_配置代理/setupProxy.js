const proxy = require('http-proxy-middleware')  // 引入http-proxy-middleware'这个库，react自带的

module.exports = function(app) {
	app.use(
		proxy('/api1',{  // 遇见/api1前缀的请求，就会触发给代理配置
			target: 'http://localhost:5000',  // 请求转发给谁
			changeOrigin: true, // 控制服务器收到的请求头中Host字段的值,
			// true的话，服务器会识别host为5000，false（默认false）的话，服务器会识别为3000
			// true就是可以欺骗一下服务器
			pathRewrite:{'^/api1':''} // 重写请求路径（必须）
		}),
		proxy('/api2',{  // 用api2来代理
			target: 'http://localhost:5001',
			changeOrigin: true,
			pathRewrite:{'^/api2':''}
		})
	)
}