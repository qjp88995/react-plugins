import React, { useState, createRef } from 'react';
// import { getBinaryContent } from 'jszip-utils';
import mammoth from 'mammoth';

const DocxPreviewer = () => {
    const [html, setHtml] = useState('');
    const [file, setFile] = useState();
    const fileInput = createRef();
    
    const onClickUpload = e => {
        e.preventDefault();
        fileInput.current.click();
    }

    const onClickPreview = e => {
        e.preventDefault();
        if (file) {
            const reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.onload = e => {
                mammoth.convertToHtml({ arrayBuffer: e.target.result }).then(function(result) {
                    console.log('html: ', result.value);
                    console.log('messages: ', result.messages);
                    setHtml(result.value);
                }).done();
            };
        }
    }

    const onFileChange = async e => {
        e.preventDefault();
        if (e.target.value && e.target.files && e.target.files[0]) {
            if (e.target.files[0].type !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
               return console.error('文件类型错误，仅支持.docx文件');
            }
            console.log(e.target.files[0]);
            setFile(e.target.files[0]);
        }
        e.target.value = '';
    }

    return (
        <div style={{ marginTop: 20 }}>
            <h2>docx文件预览</h2>
            <p>
                <input ref={fileInput} style={{ display: 'none' }} type="file" accept="application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={onFileChange} />
                <button onClick={onClickUpload}>上传文件</button>
                <span>{file && file.name}</span>
            </p>
            <p>
                <button onClick={onClickPreview}>预览docx</button>
            </p>
            <div dangerouslySetInnerHTML={{ __html: html }} style={{ padding: 20, minHeight: 100, textAlign: 'left', border: '1px solid #ccc' }}></div>
        </div>
    );
}

export default DocxPreviewer;
