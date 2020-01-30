import React, { useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Switch, Route, withRouter, NavLink } from 'react-router-dom';
import NotFound from 'pages/NotFound';
import { routeCfg, IRouteCfgProps } from './config';
import './App.less';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

export function RouteWithSubRoutes(route: IRouteCfgProps) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  function toggle() {
    setCollapsed(!collapsed);
  }

  return (
    <div className="App">
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['home']}
            defaultOpenKeys={['comp']}
          >
            {routeCfg.map(routeItem => {
              if (routeItem.routes) {
                return (
                  <SubMenu
                    key={routeItem.key}
                    title={
                      <span>
                        {routeItem.icon && <Icon type={routeItem.icon} />}
                        <span>{routeItem.title}</span>
                      </span>
                    }
                  >
                    {routeItem.routes.map(subItem => {
                      return (
                        <Menu.Item key={subItem.key}>
                          <NavLink to={subItem.path}>
                            {subItem.icon && <Icon type={subItem.icon} />}
                            <span>{subItem.title}</span>
                          </NavLink>
                        </Menu.Item>
                      );
                    })}
                  </SubMenu>
                );
              } else if (routeItem.component) {
                return (
                  <Menu.Item key={routeItem.key}>
                    <NavLink to={routeItem.path}>
                      {routeItem.icon && <Icon type={routeItem.icon} />}
                      <span>{routeItem.title}</span>
                    </NavLink>
                  </Menu.Item>
                );
              }
              return null;
            })}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={toggle}
            />
          </Header>
          <Content className="App-content">
            <Switch>
              {routeCfg.map(route => (
                <RouteWithSubRoutes key={route.key} {...route} />
              ))}
              <Route component={NotFound} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default withRouter(App);
