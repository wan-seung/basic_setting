import styled from 'styled-components';

const Page1 = () => {
  console.log(process.env.RESTURL_SESSIONS);
  console.log(process.env.RESTURL_SPEAKERS);
  return <PageWrapper>hello World : {process.env.RESTRUL_SESSIONS}</PageWrapper>;
};

export default Page1;

const PageWrapper = styled.div`
  color: red;
`;
