import React from "react";
import styled from 'styled-components';


export default styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  font-size:0.6rem;
  align-items: center;
  background-image: ${props => `url(${props.imgUrl})`};
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
`;

