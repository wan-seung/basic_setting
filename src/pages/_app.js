import '../styles/reset.css';
import '../styles/normalize.css';
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { themes } from '../ui/themes';
import { Provider } from 'react-redux';
import store from '../redux/store';

function MyApp({ Component, pageProps }) {
  const Layout = Component;

  return (
    <Provider store={store}>
      <ThemeProvider theme={themes}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  }
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  html {
    min-height: 100vh;
  }
  body {
    min-height: 100vh;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  #__next {
    min-height: 100vh;
  }
`;

//  * 페이지 전환시 레이아웃을 유지할 수 있습니다.
// 페이지 전환시 상태값을 유지할 수 있습니다.
// componentDidCatch를 이용해서 커스텀 에러 핸들링을 할 수 있습니다.
// 추가적인 데이터를 페이지로 주입시켜주는게 가능합니다.
// 글로벌 CSS 를 이곳에 선언합니다.
// 모든페이지에 적용되어야하는내용은 APP.js에서 처리해야된다.
