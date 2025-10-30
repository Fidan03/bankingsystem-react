import React from 'react';
import { Select, Space, ConfigProvider } from 'antd';

const handleChange = (value : string) => {
  console.log(`selected ${value}`);
};

const Dropdown = ({
  optionOne = 'AZE',
  optionTwo = 'ENG',
  optionThree = 'RU',
  w = 120,
}) => (
  <ConfigProvider
    theme={{
      components: {
        Select: {
          activeBorderColor: 'grey',
        },
      },
    }}
  >
    <Space wrap>
      <Select
        defaultValue={optionOne}
        style={{ width: w }}
        onChange={handleChange}
        options={[
          { value: optionOne, label: optionOne },
          { value: optionTwo, label: optionTwo },
          { value: optionThree, label: optionThree },
        ]}
      />
    </Space>
  </ConfigProvider>
);

export default Dropdown;
