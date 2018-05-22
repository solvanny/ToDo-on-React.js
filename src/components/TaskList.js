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

  showTasks() {
    return this.props.tasks.map((task) => {
      return (
        <Task key={'task-' + task.id} {...task} {...this.props} deleteTask={this.props.deleteTask} toggleTasks={this.props.toggleTasks} isOpen={this.state.isOpen} setOpen={this.setOpen} editTask={this.props.editTask}/>
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