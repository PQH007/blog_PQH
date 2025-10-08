import { Table } from 'antd';
import React from 'react';

const Table_cus = ({ columns, dataSource }) => {

    return (
        <Table columns={columns} dataSource={dataSource} pagination={false} bordered />
    )
}

export default Table_cus