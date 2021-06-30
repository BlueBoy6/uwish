import React from "react";
import styled from "styled-components";
// import PropTypes from 'prop-types'

export default function button({ children, onClick }) {
  return <Button onClick={onClick}>{children}</Button>;
}

// Button.propTypes = {

// }

const Button = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #227c9d 10%, #17c3b2 100%);
  transition: 0.3s;
  color: white;
  font-size: 1rem;
  margin: 20px 0;
  padding: 10px 30px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  :hover {
    transition: 0.3s;
    transform: scale(0.98);
  }
`;
