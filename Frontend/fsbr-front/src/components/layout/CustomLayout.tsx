import { Breadcrumb, Layout, Menu, theme  } from 'antd';
import React from 'react';

const { Header, Content, Footer } = Layout;

const items = new Array(2).fill(null).map((_, index) => ({
    key: index + 1,
    label: `nav ${index + 1}`,
  }));

const CustomLayout: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
    return (
            <Layout>
                <Header style={{display: 'flex', alignItems: 'center'}}>
                    <div className='demo-logo' />
                    <Menu
                        theme='dark'
                        mode='horizontal'
                        defaultSelectedKeys={['2']}
                        items={items}
                        style={{ flex: 1, minWidth: 0 }}
                    />
                </Header>
                <Content style={{ padding: '0 48px' }}>
                    <Breadcrumb style={{ margin: '16px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}>
                        My content
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design @{new Date().getFullYear()} Created by Andre Arruda
                </Footer>
            </Layout>
    )
}

export default CustomLayout;