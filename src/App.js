import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Page from './components/Page';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      id: 1,
      tasks: []
    };
    this.getAppState = this.getAppState.bind(this);
    this.setAppState = this.setAppState.bind(this);
  }

  //---------------------------------------------------------------------

  getAppState(name) {

    if (!name) {
      return this.state;
    }

    if (this.state[name] === undefined) {
      throw Error('Not existing state');
    }

    return this.state[name];
  }

  setAppState(partialState, callback) {
    return this.setState(partialState, callback);
  }

  //---------------------------------------------------------------------

  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact render={() => <Page day="monday"  getAppState={this.getAppState} setAppState={this.setAppState} />} />
            <Route path="/tuesday" exact render={() => <Page day="tuesday" getAppState={this.getAppState} setAppState={this.setAppState} />} />
            <Route path="/wednesday" exact render={() => <Page day="wednesday" getAppState={this.getAppState} setAppState={this.setAppState} />} />
            <Route path="/thursday" exact render={() => <Page day="thursday" getAppState={this.getAppState} setAppState={this.setAppState} />} />
            <Route path="/friday" exact render={() => <Page day="friday" getAppState={this.getAppState} setAppState={this.setAppState} />} />
            <Route path="/saturday" exact render={() => <Page day="saturday" getAppState={this.getAppState} setAppState={this.setAppState} />} />
            <Route path="/sunday" exact render={() => <Page day="sunday" getAppState={this.getAppState} setAppState={this.setAppState} />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

}


export default App;
