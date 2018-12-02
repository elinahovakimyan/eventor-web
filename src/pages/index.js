import React from 'react';
import Helmet from 'react-helmet';
// import { Link } from 'gatsby';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

import Layout from '../components/Layout';
import Stepper from '../components/Stepper';
import GridList from '../components/GridList';

import Logo from '../assets/eventor.png';

class HomeIndex extends React.PureComponent {
  state = {
    isModalOpen: false,
  }

  render() {
    const { isModalOpen } = this.state;
    console.log('this.props :', this.props);

    return (
      <Layout location={this.props.location} title="Eventor - organize your events online">
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: 'Eventor - event organizer tool' }]}
          title="Eventor - organize your events online"
        />
        <div className="home-banner">
          <img src={Logo} alt="eventor" style={{ maxWidth: 100, margin: 0 }} />
          <h2>Ծննդյան տարեդարձի ամենաարագ և հարմար կազմակերպիչը Հայաստանում</h2>
          <Button variant="outlined" className="intro-button" onClick={() => this.setState({ isModalOpen: true })}>
            Սկսել Հիմա
          </Button>

          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={isModalOpen}
            className="center-modal"
            onClose={() => this.setState({ isModalOpen: false })}
          >
            <Stepper navigate={this.props.navigate} />
          </Modal>
        </div>
        <GridList />
      </Layout>
    );
  }
}

export default HomeIndex;
