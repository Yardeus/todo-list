import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import React from "react";
import App from "next/app";
import {Provider} from "react-redux";
import store from "../redux/store";


class MyApp extends App{
  render() {
    let {Component, pageProps} = this.props;

    return (
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>

        )
  }
}



export default MyApp
