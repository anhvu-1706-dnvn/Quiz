import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ConnectedRouter } from "connected-react-router";
import { ConfigProvider, Empty } from "antd";
import store, { history } from "./redux/store";
import theme from "./configs/theme";
import Routes from "./routes";
import "./configs/languages";

import * as serviceWorker from "./serviceWorker";
import AppWrapper from "./appStyle";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <ConnectedRouter history={history}>
          <ConfigProvider renderEmpty={() => <Empty />}>
            <Routes />
          </ConfigProvider>
        </ConnectedRouter>
      </AppWrapper>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
