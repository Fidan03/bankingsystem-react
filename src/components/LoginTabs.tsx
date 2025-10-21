import React from 'react';
import { Tabs } from 'antd';
import styles from './LoginTabs.module.scss'
import OPTLogin from './OPTLogin';


const onChange = key => {
    console.log(key);
};

const items = [
    {
        key: '1',
        label: 'Tab 1',
        children: <OPTLogin/>,
    },
    {
        key: '2',
        label: 'Tab 2',
        children: 'Content of Tab Pane 2',
    },
    {
        key: '3',
        label: 'Tab 3',
        children: 'Content of Tab Pane 3',
    },
];

const LoginTabs = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} destroyInactiveTabPane />

export default LoginTabs;