import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import ErrorIndicator from '../error-indicator/error-indicator';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from "../error-boundry";
import { SwapiServiceProvider } from '../swapi-service-context';
import DummySwapiService from '../../services/dummy-swapi-service';
import { PeoplePage, PlanetsPage, StarshipsPage, SecretPage, LoginPage } from '../pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StarshipDetails } from '../sw-components';

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    hasError: false,
    swapiService: new SwapiService(),
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    })
  }


  onServiceChange = () => {
    this.setState(({swapiService}) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;

      console.log(Service.name)

      return {
        swapiService: new Service()
      }
    });
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  componentDidCatch() {
    console.log('componentDidCatch()');
    this.setState({hasError: true});
  }

  render() {

    const { isLoggedIn } = this.state;

    if(this.state.hasError){
      return <ErrorIndicator />;
    }

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService} >
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange}/>

              {planet}
              <Switch>
                <Route exact path='/' render={()=> <h2>Welcom to StarDB</h2>} />
                <Route path='/people/:id?' component={PeoplePage} />
                <Route path='/planets/:id?' component={PlanetsPage} />
                <Route path='/starships' exact component={StarshipsPage} />
                <Route path='/starships/:id' 
                  render={({ match }) => {
                    const { id } = match.params;
                    return <StarshipDetails itemId={id} />}
                  }
                />
                <Route path='/login' render={()=> (<LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />)}  />
                <Route path='/secret' render={()=> (<SecretPage isLoggedIn={isLoggedIn}/>)} />

                <Route render={() => <h2>Page not found!</h2>} />
              </Switch>

            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
