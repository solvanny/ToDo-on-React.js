import React, {Component} from 'react';


class Task extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.day
    };
    this.dayChange = this.dayChange.bind(this);
  }

  // deletes task by id
  onDelete() {
    this.props.deleteTask(this.props.id);
  }


  /**
   * Sets task active or done
   * @param ev checkbox event
   */
  onCheck(ev) {
    this.props.toggleTasks(ev.target.value);
  }

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

  dayChange(ev) {
    this.setState({
      value: ev.target.value
    });
  }
  
  renderEditForm() {
    if (this.props.isOpen === this.props.id) {
      return(
        <form onSubmit={this.onEdit.bind(this)}>
          <input name='title' type='text' defaultValue={this.props.title} />
          <select name='day' defaultValue={this.state.value} onChange={this.dayChange}>
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
    let trimTitle = formData.get('title');
    if(!trimTitle.trim()){
      return false;
    }
    this.props.editTask(this.props.id, formData.get('title'), this.state.value);
    this.props.setOpen(0);
  }

  render() {
    return (
      <li>
        <input type='checkbox' onChange={this.onCheck.bind(this)} value={this.props.id} defaultChecked={!this.props.active} />
        {this.renderEditForm()}&nbsp;
        {this.props.time.getDate()}/{this.props.time.getMonth()}/{this.props.time.getFullYear()}
        {(!this.props.active)? this.renderEditButton() : ''}
        {(!this.props.active)? <button onClick={this.onDelete.bind(this)}> Delete </button> : ''}
      </li>
    );
  }
  
}

export default Task;