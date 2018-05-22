import React from 'react';
import Menu from './Menu';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const Page = (props) => {
  return (
    <div>
      <Menu />
      <TaskForm day={props.day} setTasks={props.setTasks} />
      <TaskList tasks={props.getTasks(props.day)} toggleTasks={props.toggleTasks} deleteTask={props.deleteTask} editTask={props.editTask} />
      <hr />
      <TaskList tasks={props.getTasks(props.day, false)} toggleTasks={props.toggleTasks} deleteTask={props.deleteTask} editTask={props.editTask} />
    </div>
  );
};


export default Page;