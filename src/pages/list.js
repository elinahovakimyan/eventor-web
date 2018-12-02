import React from 'react';
// import { Link } from 'gatsby';
import Button from '@material-ui/core/Button';

import Layout from '../components/Layout';
import GridList2 from '../components/GridList2';

class HomeIndex extends React.PureComponent {
  render() {
    return (
      <Layout location={this.props.location} title="Eventor - organize your events online">
        <GridList2 />
      </Layout>
    );
  }
}

export default HomeIndex;
