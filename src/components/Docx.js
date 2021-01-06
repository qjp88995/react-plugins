import React from 'react';
import { Document, Packer, PageOrientation, Paragraph } from 'docx';
import { saveAs } from 'file-saver';

const Docx = () => {
    const onClick = e => {
        e.preventDefault();
        const doc = new Document();
        doc.addSection({
            size: {
                width: '297mm',
                height: '420mm',
                orientation: PageOrientation.LANDSCAPE,
            },
            children: new Array(100).fill(new Paragraph('这是一个段落！')),
            properties: {
                column: {
                    count: 2,
                },
            },
        });
        Packer.toBlob(doc).then(blob => {
            saveAs(blob, '测试文档.docx');
        });
    }

    return (
        <div>
            <h2>docx插件生成.docx文件</h2>
            <p>
                <button onClick={onClick}>输出docx</button>
            </p>
        </div>
    );
};

export default Docx;
