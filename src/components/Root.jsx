import React from "react";

// change this because we are not using react-router
import { Switch, Route } from "react-router";
import { Provider } from "react-redux";
import PropTypes from "prop-types";

import ComposeView from "./MainComposeView";
import DisplayView from "./DisplayView";


const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Switch>
        {/* Will have to change the routing and paths */}
        <Route path="/" exact component={ComposeView} />

        <Route path="/:hash" component={DisplayView} />
      </Switch>
      <Footer />
    </div>

  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape().isRequired
};

// Export
export default Root;
