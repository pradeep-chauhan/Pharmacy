import Document, { Head, Html, Main, NextScript, DocumentContext } from "next/document";


class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<Record<string, unknown> & {html: string}> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
          <link rel="manifest" href="/favicon/site.webmanifest"/>
          <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="apple-mobile-web-app-title" content="Snippit"/>
          <meta name="application-name" content="<APP NAME>"/>
          <meta name="msapplication-TileColor" content="#ffc40d"/>
          <meta name="theme-color" content="#ffffff"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;