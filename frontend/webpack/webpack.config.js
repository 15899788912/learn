var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	context : __dirname ,
	entry : {
		app:"./a.js",
		css : "./src/css"
		//assert : "./src/css/common.scss"
		},
	output : {
		path : __dirname +"/dist",
		filename : "[name].js"
	},
	resolve:{
		extensions : [".js",".ts",".css",".png",""]
		},
	module : {
		loaders : [
		    { test : /\.html$/,loader:"html"},
			{ test : /\.png$/,include:["src"],loader:"url-loader?mimetype=image/png"},
			{ test : /\.css$/,loader:"style!css"},
			//{ test : /\.scss$/,loader : "style!css!sass"}, 第一种写法，在head生产style.
			{test : /\.scss$/, loader : ExtractTextPlugin.extract('style','css!sass')},
			{test : /\.less$/, loader : ExtractTextPlugin.extract('style','css!less')}
		]
	},
	htmlLoader: {
		ignoreCustomFragments: [/\{\{.*?}}/],
		root:__dirname +"/dist",
		attrs: ['img:src', 'link:href']
	},
	plugins : [
		//new ExtractTextPlugin("css/[name].[contenthash].css")  ,//有hash,
		new ExtractTextPlugin("[name].css",{allChunks:true})
	]
};