import flush from 'styled-jsx/server';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// class MyDocument extends Document {
//   render() {
//     return (
//       <Html lang="ko">
//         <Head />
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

// export default MyDocument;

// 서버에서만 랜더링되는 부분
// 이벤트핸들러 작동 x, css도 여기서 사용 x

// export class Document extends Component {
//   static getInitialProps(ctx) {
//     const { html, head } = await ctx.renderPage({ enhanceApp });
//     const styles = [flush()];
//     return { html, head, styles };
//   }
// }

export default class Mydocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
