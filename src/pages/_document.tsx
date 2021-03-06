import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import {
  BORDER_RADIUS,
  BORDER_WIDTH,
  SPACING,
  COLOR,
} from "../constants/styles";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>inokawa.github.io</title>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <style>{`
            body {
              margin: 0;
              padding: 0;
              font-size: 16px;
              font-weight: 400;
              line-height: 1.8;
              color: ${COLOR.BLACK};
              font-family: sans-serif;
              word-wrap: break-word;
            }
            a {
              color: ${COLOR.PRIMARY};
            }
            a:visited {
              color: ${COLOR.PRIMARY_LIGHT};
            }
            
            ::selection {
              color: white;
              background: ${COLOR.PRIMARY_LIGHT};
            }
            
            blockquote {
              border-left: solid 4px ${COLOR.GRAY};
              padding-left: ${SPACING}px;
              padding-right: ${SPACING}px;
            }
            code {
              background-color: ${COLOR.LIGHT_GRAY};
              border: solid ${BORDER_WIDTH}px ${COLOR.GRAY};
              border-radius: ${BORDER_RADIUS}px;
              padding: ${SPACING / 2}px;
            }
            table {
              border-collapse: collapse;
              margin: ${SPACING / 2}px;
            }
            td,th{
              border: solid ${BORDER_WIDTH}px ${COLOR.GRAY};
              padding: ${SPACING / 2}px;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
