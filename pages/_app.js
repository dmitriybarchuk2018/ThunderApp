import React, { Component } from 'react'
import { Container } from 'next/app'
import _layout from './_layout'


class AppTemplate extends Component {

  static async getInitialProps({Component, ctx}) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    return {pageProps}
  }

  render() {
    const { Component, pageProps, store } = this.props
    const WrappedComponent = Component.noLayout ? <Component {...pageProps} /> : (

      <_layout>
        <Component {...pageProps} />
      </_layout>
    )

    return (
      <Container>
        {WrappedComponent}
      </Container>
    )
  }
}

export default AppTemplate