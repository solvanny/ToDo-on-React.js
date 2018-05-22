import React, {Component} from 'react';


class Task extends Component {

  onDelete() {
    let tasks = this.props.getAppState('tasks');
    tasks = tasks.filter((task) => {
      return task.id !== this.props.id;
    });
    this.props.setAppState({
      tasks: tasks
    });
  }
  
  // deletes task by id
  onCheck() {
    let id = parseInt(this.props.id);

    let tasks = this.props
      .getAppState('tasks')
      .map((task) => {
        if (task.id === id) {
          task.active =! task.active;
        }
        return task;
      });

    this.props.setAppState({
      tasks: tasks
    });
  }

  

  // /**
  //  * Sets task active or done
  //  * @param ev checkbox event
  //  */
  // onCheck(ev) {
  //   this.props.toggleTasks(ev.target.value);
  // }

  renderEditButton() {
    if(this.props.isOpen === this.props.id){
      return '';
    }
    return(
      <button onClick={this.onClickEdit.bind(this)}> Edit </button>
    );
  }

  onClickEdit() {
    this.props.setOpen(this.props.id);
  }
  
  renderEditForm() {
    if (this.props.isOpen === this.props.id) {
      return(
        <form onSubmit={this.onEdit.bind(this)}>
          <input name='title' type='text' defaultValue={this.props.title} />
          <select name='day' defaultValue={this.props.day}>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="saturday">Saturday</option>
            <option value="sunday">Sunday</option>
          </select>
          <button>Save</button>
        </form>
      );
    } 
    return this.props.title;
  }

  onEdit(ev) {
    ev.preventDefault();
    let formData = new FormData(ev.target);
    let title = formData.get('title');
    let day = formData.get('day');
    if(!title.trim()){
      return false;
    }

    let tasks = this.props.getAppState('tasks').map((task) => {
      if (task.id === this.props.id) {
        task.title = title;
        task.day = day;
        return task;
      }
      return task;
    });
    this.props.setAppState({
      tasks: tasks
    }, () => {
      this.props.setOpen(0);
    });
  }

  render() {
    return (
      <li>
        <input type='checkbox' onChange={this.onCheck.bind(this)} value={this.props.id.toString()} defaultChecked={!this.props.active} />
        {this.renderEditForm()}&nbsp;
        {this.props.time.getDate()}/{this.props.time.getMonth()}/{this.props.time.getFullYear()}
        {(!this.props.active)? this.renderEditButton() : ''}
        {(!this.props.active)? <button onClick={this.onDelete.bind(this)}> Delete </button> : ''}
      </li>
    );
  }
  
}

export default Task;