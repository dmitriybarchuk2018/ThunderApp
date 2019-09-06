import {Component} from 'react';
import Router from 'next/router';

class Index extends Component {
  static async getInitialProps({res}) {
    // Redirect from Node side
    if (res) {
      res.writeHead(302, {Location: '/main'});
      res.end();

      // Redirect from UI side
    } else {
      Router.replace('/main');
    }
  }
}

export default Index;
