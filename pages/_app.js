import React, { Component } from 'react'
import { Container } from 'next/app'
import AppLayout from '../src/components/AppLayout/AppLayout'


class AppTemplate extends Component {

  static async getInitialProps({Component, ctx}) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    return {pageProps}
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    )
  }
}

export default AppTemplate