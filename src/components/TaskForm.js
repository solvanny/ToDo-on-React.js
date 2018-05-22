import React, { Component } from 'react';

class TaskForm extends Component {

  setTasks(value, day) {

    let tasks = this.props.getAppState('tasks');
    let id = this.props.getAppState('id');

    for(let i = 0; i<value.length; i++) {
      if(!value[i].trim()) continue; 
      var task = {
        id: id++,
        active: true,
        title: value[i],
        time: new Date(),
        day: day
      };
      tasks = [...tasks, task];
    }
    this.props.setAppState({
      id: id,
      tasks: tasks
    });
  }
   
  render() { 

    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input 
            type="text"
            name="task"
          />
          <button type="submit" >Add new task</button>
        </form>
      </div>
    );
  }

  onSubmit(ev) {
    ev.preventDefault();
    let formData = new FormData(ev.target);
    
    let task = formData.get('task');
    
    if(!task.trim()){
      return false;
    }
    this.setTasks(task.split(';'), this.props.day);
    ev.target.reset();
  }
}


export default TaskForm;