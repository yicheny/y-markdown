import React from 'react'
import {render} from 'react-dom'
import Markdown from "./component/Markdown";
// import doc from './doc/测试文档.md';
import './index.scss';

const App = ()=>{
    return <Markdown>
        {require('./doc/测试文档.md').default}
    </Markdown>;
};

render(<App/>, document.querySelector('#app'));

// function component() {
//     let element = document.createElement('div');
//     element.innerHTML = "动态添加html内容";
//     return element;
// }
// //将生成的div标签添加到body中去
// document.body.appendChild(component());
