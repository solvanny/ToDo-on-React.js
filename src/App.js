import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Page from './components/Page';


class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      tasks: []
    };
    this.id = 1;
    this.getTasks = this.getTasks.bind(this);
    this.toggleTasks = this.toggleTasks.bind(this);
    this.setTasks = this.setTasks.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
  }

  //---------------------------------------------------------------------

  getAppState() {
    return this.state;
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


  setTasks(value, day) {

    let tasks = this.state.tasks;

    for(let i = 0; i<value.length; i++) {
      if(!value[i].trim()) continue; 
      var task = {
        id: this.id++,
        active: true,
        title: value[i],
        time: new Date(),
        day: day
      };
      tasks = [...tasks, task];
    }
    this.setState({
      tasks: tasks
    });
  }

  deleteTask(id) {
    let tasks = this.state.tasks.filter((task) => {
      return task.id !== id;
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
            <Route path="/" exact render={() => <Page day="monday"  deleteTask={this.deleteTask} setTasks={this.setTasks} getTasks={this.getTasks} toggleTasks={this.toggleTasks} editTask={this.editTask} />} />
            <Route path="/tuesday" exact render={() => <Page day="tuesday" deleteTask={this.deleteTask} setTasks={this.setTasks} getTasks={this.getTasks} toggleTasks={this.toggleTasks} editTask={this.editTask} />} />
            <Route path="/wednesday" exact render={() => <Page day="wednesday" deleteTask={this.deleteTask} setTasks={this.setTasks} getTasks={this.getTasks} toggleTasks={this.toggleTasks} editTask={this.editTask} />} />
            <Route path="/thursday" exact render={() => <Page day="thursday" deleteTask={this.deleteTask} setTasks={this.setTasks} getTasks={this.getTasks} toggleTasks={this.toggleTasks} editTask={this.editTask} />} />
            <Route path="/friday" exact render={() => <Page day="friday" deleteTask={this.deleteTask} setTasks={this.setTasks} getTasks={this.getTasks} toggleTasks={this.toggleTasks} editTask={this.editTask} />} />
            <Route path="/saturday" exact render={() => <Page day="saturday" deleteTask={this.deleteTask} setTasks={this.setTasks} getTasks={this.getTasks} toggleTasks={this.toggleTasks} editTask={this.editTask} />} />
            <Route path="/sunday" exact render={() => <Page day="sunday" deleteTask={this.deleteTask} setTasks={this.setTasks} getTasks={this.getTasks} toggleTasks={this.toggleTasks} editTask={this.editTask} />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

}


export default App;
