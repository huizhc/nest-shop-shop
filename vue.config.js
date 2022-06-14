
const path = require('path')

function resolve(dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	lintOnSave: false,
	publicPath: './',
	devServer: {
		port: '8080',
		proxy: {
			"/api": {
				target: "http://localhost:3000",
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					"^/api": "" // 请求的时候使用这个api就可以
				}
			},
			"/upload": {
				target: "http://localhost:3000/upload",
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					"^/upload": "" // 请求的时候使用这个api就可以
				}
			},
		}
	},
	configureWebpack: {
		resolve: {
			alias: {
				"@": resolve("src")
			}
		}
	},



}