import React,{useState , Component } from 'react';
import {Link} from 'react-scroll';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import profile from '../Assets/img/profile.jpeg'
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  InstagramOutlined,
  TwitterOutlined,
  CodepenOutlined,
  LinkedinOutlined,
  GithubOutlined,
  UserOutlined,
  FileAddOutlined,
  TabletOutlined,
  WalletOutlined,
} from '@ant-design/icons';
const { Header, Sider, Content } = Layout;
const MainLayout=({children}) =>{
 const [collapsed,setCollapsed]= useState(false)
  const toggle = () => {
 setCollapsed(!collapsed)
  };
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} style={{height:'100vh', position:"fixed" } }>
          <img className="logo" src={profile}/>
          <h1 className="name">Jeanne Gentille UMUTONIWASE </h1>
          <div >
          <Menu theme="dark" mode="holizontal" defaultSelectedKeys={['0']}>
          <GithubOutlined className="social-icon"/>
          <LinkedinOutlined className="social-icon"/>
          <CodepenOutlined className="social-icon"/>
          <TwitterOutlined className="social-icon"/>
          <InstagramOutlined className="social-icon"/>
          </Menu>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={ <HomeOutlined  className="sider-icon"/>}><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link>
              
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined className="sider-icon"/>}><Link  to="about" spy={true} smooth={true}>About</Link>
             
            </Menu.Item>
           
            <Menu.Item key="3" icon={<FileAddOutlined className="sider-icon"/>}><Link  to="resume" spy={true} smooth={true}>Resume</Link>
            
            </Menu.Item>
            <Menu.Item key="4" icon={<WalletOutlined className="sider-icon"/>}><Link  to="portfolio" spy={true} smooth={true}> Portfolio</Link>
             
            </Menu.Item>
            <Menu.Item key="3" icon={<TabletOutlined  className="sider-icon"/>}><Link  to="contact" spy={true} smooth={true}> Contact </Link>
             
            </Menu.Item>
          </Menu>
          <p style={{color:"white"}}> © Copyright Portfolio
Designed by<span style={{color:"blue"}}> Gentille </span></p>
        </Sider>
        <Layout className="site-layout">
          {/* <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header> */}
          <Content
            className="site-layout-background"
            style={{
              margin: '0px 3px',
              padding: 0,
              minHeight: '100vh',
            }}
          >
          {children}
          </Content>
        </Layout>
      </Layout>
    );
}
export default MainLayout;