import { useContext } from 'react';
import { Layout, Menu} from 'antd';
import AuthContext from './authContext';
import React from 'react';

const { Header, Content, Footer } = Layout;
function Stock () {
    const context = useContext(AuthContext);
    if (!context) {
        window.location.href = '/stock-notallow';
    } 
    return (
        <>
            <Layout>
                <Header
                    style={{
                        position: 'fixed',
                        zIndex: 1,
                        width: '100%',
                    }}
                >
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                    >
                        <Menu.Item >
                            Stock
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content
                    className="site-layout"
                    style={{
                        padding: '0 50px',
                        marginTop: 64,
                    }}
                >

                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: 380,
                            textAlign: 'center'
                        }}
                    >
                        THIS IS STOCK!!!!
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </>
    )
}

export default Stock;