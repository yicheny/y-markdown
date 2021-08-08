import React from 'react'
import {render} from 'react-dom'
import Markdown from "../entry/component/Markdown";
import './index.scss';

const App = ()=>{
    return <Markdown onMarked={h => console.log('html',h)}>
        {require('./测试文档.md').default}
    </Markdown>;
};

render(<App/>, document.querySelector('#app'));
