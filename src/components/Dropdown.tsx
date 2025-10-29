import React from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        ENG
      </a>
    ),
  },
    {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        RU
      </a>
    ),
  },
];
const DropdownMenu = () => (
  <Dropdown menu={{ items }}>
    <a onClick={e => e.preventDefault()}>
      <Space>
        AZE
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default DropdownMenu;