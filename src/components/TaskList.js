import React, { Component } from 'react';
import Task from './Task';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.setOpen = this.setOpen.bind(this);
  }

  getTasks() {
    let tasks = this.props.getAppState('tasks');
    let active = (this.props.active === '1') ? true: false;
    return tasks.filter((task) => {
      return task.day === this.props.day && task.active === active;
    })
      .sort((prev, next) => {
        if (prev.time > next.time) {
          return this.props.active ? -1 : 1;
        }
        if (prev.time < next.time) {
          return this.props.active ? 1 : -1;
        }
        return 0;
      });
  }

  showTasks() {
    let props = this.props;
    return this.getTasks().map((task) => {
      return (
        <Task key={'task-' + task.id}  {...props} {...task}  isOpen={this.state.isOpen} setOpen={this.setOpen}  />
      );
    });
  }

  setOpen(id) {
    this.setState({
      isOpen: id
    });
  }

  render() {
    return (
      <ul>
        {this.showTasks()}
      </ul>
    );
  }
}

export default TaskList;