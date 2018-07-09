import React from "react";
import styled from "styled-components";

import formatTemperature from "../utils/formatTemperature";

const Container = styled.div`
  background: white;
  border-radius: 4px;
  box-shadow: 1px 1px 1px solid gainsboro;
  padding: 12px;
  margin: 12px;
  min-width: 250px;
  color: skyblue;
  position: relative;
`;

const Title = styled.div`
  font-size: 2rem;
  font-family: "Nunito";
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid whitesmoke;
  padding-bottom: 16px;
`;

const Row = styled.p`
  margin: 2px 0;
`;

const Close = styled.div`
  position: absolute;
  top: 2px;
  right: 10px;
  cursor: pointer;
`;

const WeatherCard = ({city, stats, weather, format, onClose}) => (
  <Container>
    {onClose && <Close onClick={onClose}>X</Close>}
    <Header>
      <Title>{city}</Title>
      <img
        src={`${process.env.REACT_APP_ICONS_API}${weather.icon}.png`}
        alt="Weather icon"
      />
      <span>{weather.description}</span>
    </Header>
    <Row>
      <b>Actual temperature</b>: {formatTemperature(stats.temp, format)}
    </Row>
    <Row>
      <b>Min temperature</b>: {formatTemperature(stats.temp_min, format)}
    </Row>
    <Row>
      <b>Max temperature</b>: {formatTemperature(stats.temp_max, format)}
    </Row>
    <Row>
      <b>Humidity</b>: {stats.humidity}%
    </Row>
    <Row>
      <b>Pressure</b>: {stats.pressure} hPa
    </Row>
  </Container>
);

export default WeatherCard;
