import { Layout } from 'antd';
import Sidebar from '../components/Sidebar';
import HeaderLayout from '../components/Header';

const { Header, Sider, Content } = Layout;

const headerStyle = {
  color: '#fff',
  padding: '0 24px',
  lineHeight: '64px',
  width: '79vw',
  marginLeft: '24px',
};

const contentStyle = {
  padding: '24px',
  minHeight: '100vh',
  width: '79vw',
  marginLeft: '24px',
};

const siderStyle = {
  height: '97vh',
  position: 'fixed',
  bacgroundColor: 'none'
};

const contentWrapperStyle = {
  marginLeft: 250,
  height: '96vh',
};

const Homepage = () => (
  <Layout style={{margin: '12px'}}>
    <Sider width={200} style={siderStyle}>
      <Sidebar />
    </Sider>

    <Layout style={contentWrapperStyle}>
      <Header style={headerStyle}>
        <HeaderLayout />
      </Header>
      <Content style={contentStyle}>
        Content
      </Content>
    </Layout>
  </Layout>
);

export default Homepage;
