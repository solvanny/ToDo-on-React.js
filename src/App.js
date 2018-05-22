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
    this.getTasks = this.getTasks.bind(this);
    this.toggleTasks = this.toggleTasks.bind(this);
    this.editTask = this.editTask.bind(this);
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

  getTasks(day, active) {

    active = (active === undefined) ? true : active;

    return this.state.tasks.filter((task) => {
      return task.day === day && task.active === active;
    })
      .sort((prev, next) => {
        if (prev.time > next.time) {
          return active ? -1 : 1;
        }
        if (prev.time < next.time) {
          return active ? 1 : -1;
        }
        return 0;
      });
  }

  toggleTasks(id) {
    id = parseInt(id);

    let tasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        task.active =! task.active;
      }
      return task;
    });

    this.setState({
      tasks: tasks
    });
  }

  editTask(id, title, newDay) {
    let tasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        task.title = title;
        task.day = newDay;
        return task;
      }

      return task;
    });

    this.setState({
      tasks: tasks
    });
  }


  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact render={() => <Page day="monday"  getAppState={this.getAppState} setAppState={this.setAppState} deleteTask={this.deleteTask} setTasks={this.setTasks} getTasks={this.getTasks} toggleTasks={this.toggleTasks} editTask={this.editTask} />} />
            <Route path="/tuesday" exact render={() => <Page day="tuesday" getAppState={this.getAppState} setAppState={this.setAppState} deleteTask={this.deleteTask} setTasks={this.setTasks} getTasks={this.getTasks} toggleTasks={this.toggleTasks} editTask={this.editTask} />} />
            <Route path="/wednesday" exact render={() => <Page day="wednesday" getAppState={this.getAppState} setAppState={this.setAppState} deleteTask={this.deleteTask} setTasks={this.setTasks} getTasks={this.getTasks} toggleTasks={this.toggleTasks} editTask={this.editTask} />} />
            <Route path="/thursday" exact render={() => <Page day="thursday" getAppState={this.getAppState} setAppState={this.setAppState} deleteTask={this.deleteTask} setTasks={this.setTasks} getTasks={this.getTasks} toggleTasks={this.toggleTasks} editTask={this.editTask} />} />
            <Route path="/friday" exact render={() => <Page day="friday" getAppState={this.getAppState} setAppState={this.setAppState} deleteTask={this.deleteTask} setTasks={this.setTasks} getTasks={this.getTasks} toggleTasks={this.toggleTasks} editTask={this.editTask} />} />
            <Route path="/saturday" exact render={() => <Page day="saturday" getAppState={this.getAppState} setAppState={this.setAppState} deleteTask={this.deleteTask} setTasks={this.setTasks} getTasks={this.getTasks} toggleTasks={this.toggleTasks} editTask={this.editTask} />} />
            <Route path="/sunday" exact render={() => <Page day="sunday" getAppState={this.getAppState} setAppState={this.setAppState} deleteTask={this.deleteTask} setTasks={this.setTasks} getTasks={this.getTasks} toggleTasks={this.toggleTasks} editTask={this.editTask} />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

}


export default App;
