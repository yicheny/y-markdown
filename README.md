[TOC]

# 用来做什么？
通过`React`组件的方式调用，将`markdown`文件内容转换为`html`渲染【内置了一套样式】。

# 用法
```js
const App = ()=>{
    return <Markdown onMarked={h => console.log('html',h)}>
        {require('./测试文档.md').default}
    </Markdown>;
};
```

# API
- `children` {string} markdown文档内容
- `className` 符合`clsx`方法接口的参数都可以，通常是`string`
- `style` {object}
- `onMarked` {function}
