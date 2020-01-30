import React from 'react';
import { RouteWithSubRoutes } from '../../App';
import { Switch } from 'react-router-dom';
import './style.less';

interface ICompProps {
  routes: any[];
}

const Comp = ({ routes }: ICompProps) => {
  return (
    <div className="p-comp">
      <Switch>
        {routes.map((route: any) => (
          <RouteWithSubRoutes key={route.key} {...route} />
        ))}
      </Switch>
    </div>
  );
};

export default Comp;
