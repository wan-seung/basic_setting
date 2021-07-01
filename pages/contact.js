import styled from 'styled-components';
import Link from 'next/link';

const main = () => {
  console.log(process.env.RESTURL_SESSIONS);
  console.log(process.env.RESTURL_SPEAKERS);
  return (
    <div>
      <PageWrapper>hello World : {process.env.RESTRUL_SESSIONS}</PageWrapper>
    </div>
  );
};

export default main;

const PageWrapper = styled.div`
  color: red;
`;
