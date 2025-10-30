import React from 'react';
import { Select, Space, Input, Button, Flex, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import styles from './HomepageMain.module.scss'

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const props: UploadProps = {
  name: 'file',
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const HomepageMain: React.FC = () => (

    <div className={styles.homepageMainContainer}>

        <div className={styles.inputFields}>
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

        <div>
            <div>
                <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
            </div>

            <div>
                <div>
                    <p>Köçürülən məbləğ</p>
                    <p>5.20 AZN</p>
                </div>

                <p>Kommisiya: 0.00 AZN</p>
            </div>

            <div>
                <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
            </div>
        </div>

    </div>
  
);

export default HomepageMain;