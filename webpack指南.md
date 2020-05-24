[TOC]

# 生成`Index.html`文件
- 安装`html-webpack-plugin`
- 配置`webpack.config.js`，如下：
```
const HtmlWebpackPlugin  = require("html-webpack-plugin");

module.exports = {
    entry:...,
    output:...,
    module:..,
    plugins: [
        new HtmlWebpackPlugin({
            title: "自定义标题"
        }),
    ]
}
```
- 执行`webpack`指令

# 自动编译代码
- 安装`webpack-dev-server`
- 配置`webpack.config.js`，如下：
```
module.exports = {
    entry:...,
    output:...,
    module:..,
    plugins:...,
    devServer:{
        contentBase:"./dist",
        host:'127.0.0.1',
        port:3030
    }
}
```
- 执行`webpack-dev-server`指令

# 模块方法-支持`import`、`export`
webpack 2 支持原生的 ES6 模块语法，意味着你可以无须额外引入 babel 这样的工具，就可以使用 import 和 export。但是注意，如果使用其他的 ES6+ 特性，仍然需要引入 babel

# 单个js文件怎么编译成同名文件
执行`babel 指定目录 --out-dir lib`

# 展示markdown文件
## 无代码情形
配置如下：
```
{
    test: /\.md$/,
    use: [
        {
            loader: "html-loader"
        },
        {
            loader: "markdown-loader",
            options: {
                pedantic: true,
                renderer:new marked.Renderer()
            }
        }
    ]
}
```

## 含代码情形
因`marked + highlights`存在代码块识别错误的情况，比如说多个代码块只识别其中一块，某一块代码识别不完全等情况。

总之，在`webpack`使用`marked + highlights`没有找到合适的配置方案

暂定思路是通过`raw-loader`获取原始数据，然后利用`marked + highlights`进行文本转换和样式格式化

### 1. 读取原始数据
配置如下：
```
{
    test: /\.md$/,
    use: [
        {
            loader: "raw-loader"
        }
    ]
}
```

### 2. 文本格式化及样式格式化
```
marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: (code)=>hljs.highlight('javascript',code).value,
    ... //其他配置
});

function Markdown(props) {
    const innerHtml = { __html: marked(props.children) };
    return (
        <div dangerouslySetInnerHTML={innerHtml}/>
    );
}
```
