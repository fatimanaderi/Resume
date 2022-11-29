import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="fa">
        <Head>
        </Head>
        <body className='body'>
          <Main /> 
          <NextScript />
          <script src='/bootstrap/js/bootstrap.min.js'></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
