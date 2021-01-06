import React, { createRef, useState } from 'react';
import JSZip from 'jszip';
// import { getBinaryContent } from 'jszip-utils';
import { saveAs } from 'file-saver';

const Jszip = () => {
    const [file, setFile] = useState();
    const [findStr, setFindStr] = useState('');
    const [replaceStr, setReplaceStr] = useState('');
    const fileInput = createRef();

    const exportDocx = async ({ file, replaceContent, saveName }) => {
        const zip = await JSZip.loadAsync(file);
        const doc = await zip.file('word/document.xml').async('text');
        zip.file('word/document.xml', replaceContent ? replaceContent(doc) : doc);
        const blob = await zip.generateAsync({ type: 'blob' });
        saveAs(blob, saveName || `${Date.now()}.docx`);
    }

    const onClickUpload = e => {
        e.preventDefault();
        fileInput.current.click();
    }

    const onClickExport = e => {
        e.preventDefault();
        if (file) {
            const replaceContent = content => content && findStr ? content.replace(findStr, replaceStr || '') : content
            exportDocx({
                file,
                replaceContent,
                saveName: '测试.docx',
            });
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
        <div>
            <h2>docx文件内容替换</h2>
            <p>上传一个docx文件，将文件中的内容进行替换，然后导出新的docx文件</p>
            <p>
                <input ref={fileInput} style={{ display: 'none' }} type="file" accept="application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={onFileChange} />
                <button onClick={onClickUpload}>上传文件</button>
                <span>{file && file.name}</span>
            </p>
            <p>
                查找：
                <input type="text" value={findStr} onChange={e => setFindStr(e.target.value)} />
            </p>
            <p>
                替换：
                <input type="text" value={replaceStr} onChange={e => setReplaceStr(e.target.value)} />
            </p>
            <p>
                <button onClick={onClickExport}>导出word</button>
            </p>
        </div>
    );
}

export default Jszip;
