import React from 'react';
import marked from "marked";
import hljs from "highlight.js";

marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: (code)=>hljs.highlight('javascript',code).value,
    // highlight: (code)=>hljs.highlightAuto(code).value, //高亮语言不明确时的方案
    gfm: true,//是否允许 Git Hub标准的markdown.
    tables: true,//是否允许支持表格语法。该选项要求 gfm 为true
    breaks: false,//是否允许回车换行。该选项要求 gfm 为true
    pedantic: false,//是否尽可能地兼容 markdown.pl的晦涩部分。不纠正原始模型任何的不良行为和错误。
    sanitize: false,//是否对输出进行过滤（清理），将忽略任何已经输入的html代码（标签）
    smartLists: true,//是否使用比原生markdown更时髦的列表。 旧的列表将可能被作为pedantic的处理内容过滤掉.
    smartypants: false//是否使用更为时髦的标点，比如在引用语法中加入破折号。
});

function Markdown(props) {
    const innerHtml = { __html: marked(props.children) };
    return (
        <div dangerouslySetInnerHTML={innerHtml} className='y-markdown'/>
    );
}

export default Markdown;
