import React from 'react';
import { Select, Space, Input, Button, Flex } from 'antd';
// import styles from './HomepageMain.module.scss'

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const HomepageMain: React.FC = () => (

    <div>

        <div>
            <Space wrap>
                <Select
                defaultValue="lucy"
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
                />
                    <Select
                defaultValue="lucy"
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
                />
                    <Select
                defaultValue="lucy"
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
                />
            </Space>

            <Input placeholder="Basic usage" />
            <Input placeholder="Basic usage" />
        </div>

        <div>
            <Flex gap="small" wrap>
                <Button type="primary">Primary Button</Button>
                <Button type="primary">Primary Button</Button>
            </Flex>
        </div>
    </div>
  
);

export default HomepageMain;