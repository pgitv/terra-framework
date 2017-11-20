import React from 'react';
// import AppDelegate from 'terra-app-delegate';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import LayoutExamples from './examples/layout/Index';
import NavigationExamples from './examples/navigation-layout/Index';
import ApplicationHeaderExamples from './examples/application-header/Index';

const propTypes = {
//   app: AppDelegate.propType,
//   routingManager: RoutingManagerDelegate.propType,
};

const Components = () => (
  <div style={{ height: '100%', position: 'relative', padding: '15px' }}>
    <Switch>
      <Route path="/components/layout" component={LayoutExamples} />
      <Route path="/components/navigation-layout" component={NavigationExamples} />
      <Route path="/components/application-header" component={ApplicationHeaderExamples} />
      <Redirect to="/components/layout" />
    </Switch>
  </div>
);
Components.propTypes = propTypes;

export default withRouter(Components);
