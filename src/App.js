import React from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";

import About  from "./components/about"
import { Hourly } from "./components/hourly"
import { Current } from "./components/current"
import { NavBar } from "./components/navbar"

export default class App extends React.Component {
  state = {
    weather: {}
  };

  componentDidMount() {
    const weatherURL =
      "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/01a29cd21711adf074b2705013ede8e9/40.7128,-74.0060";
    axios
      .get(weatherURL)
      .then(res => {
        this.setState(() => ({
          weather: res.data
        }))
      })
      .catch(err => {
        console.log(err);
      });
  }


  renderHourly = () => {
    const { weather: { hourly } } = this.state
    return (<Hourly hourly_weather={hourly} />)
  }

  renderCurrent = () => {
    const { weather: { currently } } = this.state
    /**return (<Current currently={this.state.weather.currently} />) */
    return (<Current currently={currently} />)
  }

  render() {
    const { weather: {timezone} } = this.state
    return (
      <div>
        <NavBar />
        <h1>Weather for {timezone}</h1>
        <Switch>
        <Route exact path='/current' render={this.renderCurrent}/>
        <Route exact path='/hourly' render={this.renderHourly}/>
        <Route exact path='/about' component={About}/>
        </Switch>
      </div>
    );
  }
}
