import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends NextDocument {
  render() {
    return (
      <Html lang="pt">
        <Head>
          <meta name="theme-color" content="#522EFA" />
        </Head>
        <body className="bg-chinese-black text-flash-white antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
