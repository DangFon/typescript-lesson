// 引入一个包
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// webpack中所有的配置信息都应该卸载module.exports中
module.exports = {
    // 指定入口文件
    entry:"./src/index.ts",

    //指定打包文件所在目录
    output:{
        // 指定打包文件的目录
        path: path.resolve(__dirname,'dist'),
        // 打包后的文件
        filename:'bundle.js',
        // 兼容低版本浏览器(IE) 不使用箭头函数
        environment:{
            arrowFunction:false
        }
    },
    mode:'production',
    // 指定webpack打包时要使用的模块
    module:{
        // 指定要加载的规则
        rules:[
            {
                // test指定的是规则生效的文件
                test:/\.ts$/, // 用ts-loader处理以ts结尾的文件
                use:[
                    // 配置babel
                    {   // 指定加载器
                        loader:'babel-loader',
                        // 设置babel
                        options:{
                            //设置预定义的环境
                            presets:[
                                [
                                    // 指定环境的插件
                                    "@babel/preset-env",
                                    //配置信息
                                    {   
                                        // 要兼容的目标浏览器
                                        targets:{
                                             "chrome":"88",
                                        },
                                        // 指定corejs的版本
                                        "corejs":'3',
                                        // 使用corejs的方式 “usage” 表示按需加载
                                        "useBuiltIns":"usage"
                                    }
                                ]
                            ]
                        }
                        
                    },
                    'ts-loader'
                    ],
                // 指定要排除的文件
                exclude: /node-modules/ 
            }
        ]
    },
    
    // 配置webpack插件

    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
    ],
    resolve:{
        extensions:['.ts','.js']
    }
}