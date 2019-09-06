import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

import stylesheet from 'antd/dist/antd.min.css'
import '../styles/_document.scss'


export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8"/>
          <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="stylesheet" href="/_next/static/style.css"/>
          <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon"/>
        </Head>
        <body>
          <style dangerouslySetInnerHTML={{__html: stylesheet}}/>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}
