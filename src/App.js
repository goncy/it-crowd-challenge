import React, {Component, Fragment} from "react";
import debounce from "lodash.debounce";
import styled from "styled-components";

import weather from "./services/weather";
import {persist, load} from "./services/localstorage";

import WeatherCard from "./components/WeatherCard";
import Spinner from "./components/Spinner";
import Format from "./components/Format";
import Warning from "./components/Warning";
import BackgroundMap from "./components/BackgroundMap";
import Grid from "./components/Grid";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 1;
  font-family: "Nunito";
`;

const SearchBox = styled.div`
  font-size: 2rem;
  color: white;
  padding: 12px;
`;

const Search = styled.input`
  background: transparent;
  font-size: 2rem;
  border: none;
  border-bottom: 2px solid white;
  color: white;
  margin: 0 8px;
  text-align: center;
`;

class App extends Component {
  state = {
    results: load() || [],
    status: "init",
    format: "celsius",
  };

  search = debounce(async city => {
    if (!city) return;

    this.setState({status: "pending"});

    const {data} = await weather.byCity.fetch(city);

    if (data) {
      return this.setState(({results}) => {
        const newResults = [data].concat(results).slice(-5);

        persist(newResults);

        return {
          results: newResults,
          status: "resolved",
        };
      });
    } else {
      return this.setState({status: "rejected"});
    }
  }, 500);

  remove = index =>
    this.setState(({results}) => {
      const newResults = results.filter((_, i) => i !== index);

      persist(newResults);

      return {
        results: newResults,
      };
    });

  render() {
    const {status, results, format} = this.state;
    const result = results[0];

    return (
      <Fragment>
        <Container>
          <Format format={format} onClick={format => this.setState({format})} />
          <SearchBox>
            How is the weather in
            <Search
              type="text"
              onChange={event => this.search(event.target.value)}
            />
            ?
          </SearchBox>

          {status === "pending" && <Spinner />}

          {result &&
            ["resolved", "init"].includes(status) && (
              <WeatherCard
                city={result.name}
                stats={result.main}
                weather={result.weather[0]}
                format={format}
              />
            )}

          {status === "rejected" && (
            <Warning>
              Ups! There was an error looking for this city, check for typos and
              try again
            </Warning>
          )}

          {status !== "pending" &&
            results.length > 1 && (
              <Fragment>
                <h2>Previous searches</h2>
                <Grid>
                  {results
                    .slice(1)
                    .map((item, index) => (
                      <WeatherCard
                        key={item.id}
                        city={item.name}
                        stats={item.main}
                        weather={item.weather[0]}
                        onClose={() => this.remove(index + 1)}
                        format={format}
                      />
                    ))}
                </Grid>
              </Fragment>
            )}
        </Container>
        {result &&
          ["resolved", "init"].includes(status) && (
            <BackgroundMap
              src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyDjC3e0OaP4gUssgw3QH0E43z3k6OFopC0&center=${
                result.coord.lat
              },${result.coord.lon}&zoom=15`}
              width="100%"
              height="100%"
              frameBorder="0"
            />
          )}
      </Fragment>
    );
  }
}

export default App;
