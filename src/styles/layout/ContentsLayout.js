import React from "react";
import { RouterConfig } from "../../config/RouterConfig";
import { Route, Switch } from "react-router-dom";
import './Contents.css';
const ContentsLayout = () => {
  const routeComponents = RouterConfig.map(
   
    ({ path, exact, component }, key) => (
      // <div className= "mainContainer"><Route path={path} exact={exact} component={component} key={key} /></div>
      <Route path={path} exact={exact} component={component} key={key} />
    )
    
  );

  return (
    <div>
      <Switch>{routeComponents}</Switch>
    </div>
  );
};

export default ContentsLayout;
