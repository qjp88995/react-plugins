import React, { useState } from 'react';
import { render } from "art-template/lib/template-web"

const ArtTemplate = () => {
    const [text, setText] = useState('My name is {{name}}');
    const [data, setData] = useState('{ "name": "Json" }');
    const [output, setOutput] = useState('');
    
    const onClick = e => {
        const json = JSON.parse(data);
        const str = render(text, json);
        console.log(json);
        setOutput(str);
    }

    return (
        <div>
            <h2>art-template模板替换</h2>
            <p>
                <span style={{ verticalAlign: 'top' }}>模板：</span>
                <textarea style={{ verticalAlign: 'top' }} cols="30" rows="10" value={text} onChange={e => setText(e.target.value)} />
            </p>
            <p>
                <span style={{ verticalAlign: 'top' }}>数据：</span>
                <textarea style={{ verticalAlign: 'top' }} cols="30" rows="10" value={data} onChange={e => setData(e.target.value)} />
            </p>
            <p>
                <button onClick={onClick}>输出</button>
            </p>
            <p style={{ border: '1px solid #ccc', minHeight: 100, padding: 20, whiteSpace: 'pre-wrap' }}>
                {output}
            </p>
        </div>
    );
}

export default ArtTemplate;
