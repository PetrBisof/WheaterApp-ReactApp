import React from "react";
import styled from 'styled-components';

export default styled.p`
 @import url('https://fonts.googleapis.com/css?family=Lobster&display=swap');
margin: 0;
padding-bottom: 0.5rem;
font-size: ${props => props.primary ? "0.9rem" : "1.1rem"};
font-family: 'Lobster';
font-weight: ${props => props.primary ? "bold" : "lighter"};
`;

