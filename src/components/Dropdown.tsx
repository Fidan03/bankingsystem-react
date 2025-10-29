import React from 'react';
import { Select, Space } from 'antd';

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const Dropdown: React.FC = () => (
  <Space wrap>
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: 'AZE', label: 'AZE' },
        { value: 'ENG', label: 'ENG' },
        { value: 'RU', label: 'RU' },
      ]}
    />
  </Space>
);

export default Dropdown;