import { Tabs } from 'antd';
import styles from './LoginTabs.module.scss'
import OPTLogin from './OPTLogin';


const onChange = key => {
    console.log(key);
};

const items = [
    {
        key: '1',
        label: 'OTP',
        children: <OPTLogin/>,
    },
    {
        key: '2',
        label: 'Asan imza',
        children: 'Content of Tab Pane 2',
    },
    {
        key: '3',
        label: 'SIMA',
        children: 'Content of Tab Pane 3',
    },
];

const LoginTabs = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} destroyInactiveTabPane />

export default LoginTabs;