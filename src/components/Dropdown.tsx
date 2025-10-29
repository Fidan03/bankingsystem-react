import { Select, Space } from 'antd';

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Dropdown = ({ optionOne = 'AZE', optionTwo = 'ENG', optionThree = 'RU', w = 120 }) => (
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
);

export default Dropdown;
