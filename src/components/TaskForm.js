import React, { Component } from 'react';

class TaskForm extends Component {

   
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
    this.props.setTasks(task.split(';'), this.props.day);
    ev.target.reset();
  }
}


export default TaskForm;