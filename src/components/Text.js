import axios from 'axios';
import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

const Text = () => {
  return <TextBox> text Component test view</TextBox>;
};

const TextBox = styled.div`
  background-color: white;
  margin-top: 200px;
`;

export default Text;

// const MainText = () => {

//   function useData () {
//       let propsData = [];
//     axios('GET', URL).then(res =>
//       console.log(res),
//       propsData = res.item
//       )
//   }

//   return (
//     <div></div>
//   )
// }
