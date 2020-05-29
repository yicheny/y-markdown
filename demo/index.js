import React from 'react'
import {render} from 'react-dom'
import Markdown from "../entry/component/Markdown";
import './index.scss';

const App = ()=>{
    return <Markdown>
        {require('./测试文档.md').default}
    </Markdown>;
};

render(<App/>, document.querySelector('#app'));
