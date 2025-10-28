import { Layout } from 'antd';
import Sidebar from '../components/Sidebar';

const { Header, Sider, Content } = Layout;

const headerStyle = {
  color: '#fff',
  padding: '0 24px',
  lineHeight: '64px',
  // backgroundColor: '#4096ff',
  // position: 'fixed',
  width: '79vw',
  marginLeft: '24px',
};

const contentStyle = {
  padding: '24px',
  minHeight: '100vh',
  backgroundColor: 'darkred',
  width: '79vw',
  position: 'relative',
  zIndex: '-1',
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
  position: 'relative',
  zIndex: '-2'
};

const Homepage = () => (
  <Layout style={{margin: '12px'}}>
    <Sider width={200} style={siderStyle}>
      <Sidebar />
    </Sider>

    <Layout style={contentWrapperStyle}>
      <Header style={headerStyle}>Header</Header>
      <Content style={contentStyle}>
        Content
      </Content>
    </Layout>
  </Layout>
);

export default Homepage;
