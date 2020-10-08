import React from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import 'moment/locale/zh-cn';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'antd/dist/antd.css';

import Header from './Header';
import Footer from './Footer';
import * as utils from '../utils';
import enLocale from '../../en-US';
import cnLocale from '../../zh-CN';
import '../../static/style';
if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('../../static/style');

  // Expose to iframe
  window.react = React;
  window['react-dom'] = ReactDOM;
  // eslint-disable-next-line global-require
  window.antd = require('antd');
}
export default class BasicLayout extends React.Component {
  constructor(props) {
    super(props);
    const { pathname } = props.location;
    const appLocale = cnLocale;
    addLocaleData(appLocale.data);

    this.state = {
      appLocale,
    };
  }

  render() {
    const { appLocale } = this.state;
    const { children, ...restProps } = this.props;
    return (
      <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
        <LocaleProvider locale={appLocale.locale === 'zh-CN' ? zhCN : null}>
          <div className="page-wrapper">
            <Header {...restProps} />
            {children}
            <Footer {...restProps} />
          </div>
        </LocaleProvider>
      </IntlProvider>
    );
  }
}
