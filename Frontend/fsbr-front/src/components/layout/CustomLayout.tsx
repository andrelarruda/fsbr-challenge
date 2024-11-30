import { Layout, Menu, theme  } from 'antd';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

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
                        defaultSelectedKeys={['1']}
                        style={{ flex: 1, minWidth: 0 }}
                    >
                        <Menu.Item key="0">
                            <NavLink to='/'>Home</NavLink>
                        </Menu.Item>
                        <Menu.Item key="1">
                            <NavLink to='/products'>Produtos</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <NavLink to='/categories'>Categorias</NavLink>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <NavLink to=''>Logout</NavLink> {/*TODO: ajustar para ser botao de logout*/}
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ 
                        padding: '0 48px', 
                        // backgroundColor: 'yellowgreen', 
                        height: '90vh',
                    }}>
                    
                    <div style={{
                        background: colorBgContainer,
                        // minHeight: 380,
                        // height: '80vh',
                        padding: 24,
                        borderRadius: borderRadiusLG,
                        marginTop: 16,
                        height: '100%'
                    }}>
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center', position: 'fixed', bottom: 0, width: '100%',  }}>
                    Ant Design @{new Date().getFullYear()} Created by <a href='https://github.com/andrelarruda'>Andre Arruda</a>
                </Footer>
            </Layout>
    )
}

export default CustomLayout;