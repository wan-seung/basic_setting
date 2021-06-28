export default function Index() {
  return <div>basic setting</div>;
}

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
