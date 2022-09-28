import React, { useState } from 'react';
import { Table } from 'antd';

interface ITableColumns {
  key: string;
  title: string;
  dataIndex?: string;
  sorter?: boolean;
  render?: Function;
}

interface ITableComponentProps {
  columns?: Array<ITableColumns | any>;
  dataSource?: Array<any>;
  pageNum?: number;
  total?: number;
  onPageChanges?: (current: number, size: number) => any;
  onSelectChanges?: (selectedRowKeys: any, selectedRows: any) => any;
}

const TableComponent = (props: ITableComponentProps) => {
  const {
    pageNum = 1,
    total = 0,
    columns,
    dataSource = [],
    onPageChanges = (page: number, pageSize?: number) => {},
    onSelectChanges = () => {},
  } = props;
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');

  const pagination = {
    current: pageNum,
    pageSize: 10,
    total: total | 0,
    showSizeChanger: true,
    pageSizeOptions: ['10'],
    onChange: (page: number, pageSize?: any) => {
      onPageChanges(page, pageSize)
    }
  }

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      onSelectChanges(selectedRowKeys, selectedRows);
    },
    getCheckboxProps: (record: any) => ({
      // Column configuration not to be checked
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  };

  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={total < 9 ? false : pagination}
      />
    </div>
  )
}

export default TableComponent;