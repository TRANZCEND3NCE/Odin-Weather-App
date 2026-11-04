import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/template.html",
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
		],
	},
};