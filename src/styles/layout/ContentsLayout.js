import React from "react";
import { RouterConfig } from "../../config/RouterConfig";
import { Route, Switch } from "react-router-dom";

const ContentsLayout = () => {
  const routeComponents = RouterConfig.map(
    ({ path, exact, component }, key) => (
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
