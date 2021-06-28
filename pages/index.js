import styled, { useTheme } from 'styled-components';
import DefaultLayout from '../src/layouts/DefaultLayout';
import Text from '../src/components/Text';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, setUser } from '../src/redux/slices/userSlice';
import React from 'react';

export default function Home() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  useEffect(() => {
    setTimeout(() => {
      dispatch(
        setUser({
          id: 2,
          username: 'wanie',
        }),
      );
    }, 2000);
  });

  return (
    <Container>
      <Text />
      <div style={{ margin: '10px 0' }}>You're up and running with NextJS & Redux!</div>
      <p>
        Logged in as <span style={{ color: theme }}>{`${user.username} (id: ${user.id})`}</span>
      </p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

Home.Layout = DefaultLayout;
/*

Next js 모든 페이지 사전 렌더링 (Pre-rendering)
더 좋은 퍼포먼스
검색엔진최적화(SEO)

1.정적 생성
2.Server Side Rendering (SSR, Dynamic Rendering)

차이점은 언제 html 파일을 생성하는가

[정적 생성]
- 프로젝트가 빌드하는 시점에 html 파일들이 생성
- 모든 요청에 재사용
- 퍼포먼스 이유로, 넥스트 js는 정적 생성을 권고
- 정적 생성된 페이지들은 CDN에 캐시
- getStaticProps / getStaticPaths

[서버사이드 렌더링]은 매 요청마다 html 을 생성
- 항상 최산 상태 유지
- getServerSideProps

*/
