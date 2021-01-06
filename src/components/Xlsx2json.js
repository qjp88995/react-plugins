import React, { useState } from 'react';
import XLSX from 'xlsx';
import styles from './Xlsx2json.module.scss';

const tableKeys = ['index_type', 'item_type', 'majors', 'code', 'content', 'evaluation_score', 'score_code'];

const Xlsx2json = () => {
    const [url, setUrl] = useState('/test.xlsx');
    const [contentColSpan, setContentColSpan] = useState(1);
    const [data, setData] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [indexType, setIndexType] = useState('');
    const [itemType, setItemType] = useState('');
    const [major, setMajor] = useState('');

    function data2table() {
        const table = [];
        const current = {
            majors: '',
            index_type: '',
            item_type: '',
        };
        data.forEach((datum, index) => {
            const row = [];
            tableKeys.forEach(tableKey => {
                switch (tableKey) {
                    case 'content':
                        const childKeys = Object.keys(datum).filter(key => /^content_\d+$/.test(key)).sort();
                        const childrenIsBlank = childKeys.every(key => !datum[key]);
                        if (datum[tableKey]) {
                            const cell = { text: datum[tableKey], rowSpan: 1, colSpan: 1, type: 'content' };
                            if (childrenIsBlank) cell.colSpan = contentColSpan;
                            while (data[index + cell.rowSpan] && !data[index + cell.rowSpan].code) {
                                cell.rowSpan += 1;
                            }
                            row.push(cell);
                        }
                        if (!childrenIsBlank) {
                            childKeys.forEach(key => {
                                if (datum[key]) {
                                    const cell = { text: datum[key], rowSpan: 1, colSpan: 1, type: 'content_child' };
                                    const afterKeys = childKeys.filter(k => k > key);
                                    const afterIsBlank = afterKeys.every(k => !datum[k]);
                                    if (afterIsBlank) cell.colSpan += afterKeys.length;
                                    const beforeKeys = childKeys.filter(k => k <= key);
                                    while (data[index + cell.rowSpan] && !data[index + cell.rowSpan].code && beforeKeys.every(item => !data[index + cell.rowSpan][item])) {
                                        cell.rowSpan += 1;
                                    }
                                    row.push(cell);
                                }
                            });
                        }
                        break;
                    default:
                        const cell = { text: datum[tableKey], rowSpan: 1, colSpan: 1, type: tableKey };
                        if (datum[tableKey]) {
                            if (tableKey === 'code') {
                                current.majors = datum.majors || '';
                            }
                            if (tableKey === 'index_type') {
                                current.index_type = datum.index_type || '';
                            }
                            if (tableKey === 'item_type') {
                                current.item_type = datum.item_type || '';
                            }
                            if (tableKey === 'majors') {
                                while (data[index + cell.rowSpan] && !data[index + cell.rowSpan].code) {
                                    cell.rowSpan += 1;
                                }
                            } else {
                                while (data[index + cell.rowSpan] && !data[index + cell.rowSpan][tableKey]) {
                                    cell.rowSpan += 1;
                                }
                            }
                            if (tableKey === 'score_code') {
                                cell.score_options = datum['score_options'] ? datum['score_options'].split(',') : [];
                                cell.score_majors = datum['score_majors'] ? datum['score_majors'].split(',') : [];
                                cell.reject_score_codes = datum['reject_score_codes'] ? datum['reject_score_codes'].split(',') : [];
                            }
                            row.push(cell);
                        } else {
                            if (tableKey === 'majors' && datum.code) {
                                while (data[index + cell.rowSpan] && !data[index + cell.rowSpan].code) {
                                    cell.rowSpan += 1;
                                }
                                row.push(cell);
                            }
                        }
                        break;
                }
            });
            table.push({ row, ...current });
        });
        console.log(table);
        setTableData(table);
    }
    
    const fetchFile = async url => {
        return await fetch(url).then(function (res) {
            if (!res.ok) throw new Error("fetch failed");
            return res.arrayBuffer();
        }).then(function async (ab) {
            const data = new Uint8Array(ab);
            const wb = XLSX.read(data, { type: "array" });
            const json = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { defval: null });
            const firstRow = json.shift();
            const contentColSpan = Object.keys(firstRow).filter(item => /^content/.test(item)).length;
            return {
                contentColSpan,
                data: json,
            };
        });
    }

    const onClick = async () => {
        if (url) {
            const { contentColSpan, data } = await fetchFile(url);
            setContentColSpan(contentColSpan);
            setData(data);
        }
    }

    const renderTableData = tableData
    .filter(item => item.index_type.includes(indexType) && item.item_type.includes(itemType) && item.majors.includes(major))
    .map(({ row, ...current }, index, arr) => {
        const newRow = [ ...row ];
        if (index === 0 || arr[index - 1].index_type !== current.index_type) {
            if (row[0].type !== 'index_type') {
                newRow.splice(0, 0, { text: current.index_type, rowSpan: 1, colSpan: 1, type: 'index_type' });
            }
        }
        if (index === 0 || arr[index - 1].index_type !== current.index_type || arr[index - 1].item_type !== current.item_type) {
            if (newRow[0].type === 'index_type' && newRow[1].type !== 'item_type') {
                newRow.splice(1, 0, { text: current.item_type, rowSpan: 1, colSpan: 1, type: 'item_type' });
            } else if (row[0].type !== 'index_type' && row[0].type !== 'item_type') {
                newRow.splice(0, 0, { text: current.item_type, rowSpan: 1, colSpan: 1, type: 'item_type' });
            }
        }
        return { row: newRow, ...current };
    })
    .map(({ row, ...current }, _, arr) => {
        const newRow = row.map(cell => {
            if (cell.type === 'index_type') {
                return {
                    ...cell,
                    rowSpan: arr.filter(item => item.index_type.includes(current.index_type)).length,
                }
            }
            if (cell.type === 'item_type') {
                return {
                    ...cell,
                    rowSpan: arr.filter(item => item.index_type.includes(current.index_type) && item.item_type.includes(current.item_type)).length,
                }
            }
            return cell;
        });
        return { row: newRow, ...current };
    });

    console.log(renderTableData);

    return (
        <div>
            <h2>xlsx文件转json</h2>
            <div className={styles.form}>
                <input type="text" value={url} onChange={e => setUrl(e.target.value.trim())} />
                <button onClick={onClick} style={{ marginLeft: 10 }}>xlsx转换</button>
                <button onClick={data2table} style={{ marginLeft: 10 }}>table转换</button>
            </div>
            <div className={styles.filter}>
                <label htmlFor="index_type" style={{ marginLeft: 10 }}>指标类别</label>
                <select name="index_type" id="index_type" value={indexType} onChange={e => setIndexType(e.target.value)} style={{ marginLeft: 10 }}>
                    <option value="">全部</option>
                    <option value="安全耐久">安全耐久</option>
                    <option value="健康舒适">健康舒适</option>
                    <option value="生活便利">生活便利</option>
                    <option value="资源节约">资源节约</option>
                    <option value="环境宜居">环境宜居</option>
                    <option value="提高创新">提高创新</option>
                </select>
                <label htmlFor="item_type" style={{ marginLeft: 10 }}>子项</label>
                <select name="item_type" id="item_type" value={itemType} onChange={e => setItemType(e.target.value)} style={{ marginLeft: 10 }}>
                    <option value="">全部</option>
                    <option value="控制项">控制项</option>
                    <option value="评分项">评分项</option>
                </select>
                <label htmlFor="majors" style={{ marginLeft: 10 }}>专业</label>
                <select name="majors" id="majors" value={major} onChange={e => setMajor(e.target.value)} style={{ marginLeft: 10 }}>
                    <option value="">全部</option>
                    <option value="建筑">建筑</option>
                    <option value="结构">结构</option>
                    <option value="给排水">给排水</option>
                    <option value="暖通">暖通</option>
                    <option value="电气">电气</option>
                </select>
            </div>
            <div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>指标类别</th>
                            <th>子项</th>
                            <th>条文专业</th>
                            <th>条文编号</th>
                            <th>条文内容</th>
                            <th colSpan={contentColSpan - 1}>评价内容</th>
                            <th>评价档次</th>
                            <th>分值编号</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(renderTableData) && renderTableData.map((item, index) => (
                            <tr key={index}>
                                {item.row.map((it, ind) => (
                                    <td key={ind} rowSpan={it.rowSpan} colSpan={it.colSpan}>{it.text}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Xlsx2json;
