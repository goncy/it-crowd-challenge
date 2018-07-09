import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 4px;
  left: 12px;
  cursor: pointer;

  .selected {
    font-weight: 600;
  }

  span:not(:last-child)::after {
    content: " - ";
  }
`;

const Format = ({onClick, format}) => (
  <Container>
    <span
      className={format === "kelvin" ? "selected" : ""}
      onClick={() => onClick("kelvin")}
    >
      Kelvin
    </span>
    <span
      className={format === "celsius" ? "selected" : ""}
      onClick={() => onClick("celsius")}
    >
      Celsius
    </span>
    <span
      className={format === "farenheit" ? "selected" : ""}
      onClick={() => onClick("farenheit")}
    >
      Farenheit
    </span>
  </Container>
);

export default Format;
