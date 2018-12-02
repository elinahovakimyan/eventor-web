import React from 'react';

import Navigator from './nav/Navigator';
// import { rhythm } from '../utils/typography';

import '../styles/styles.scss';

class Layout extends React.PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div>
        <div style={{ marginBottom: 56, minHeight: '100vh' }}>
          {children}
        </div>
        <Navigator />
      </div>
    );
  }
}

export default Layout;
