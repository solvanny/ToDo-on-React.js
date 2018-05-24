import React from 'react';
import Menu from './Menu';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const Page = (props) => {
  return (
    <div>
      <Menu />
      <TaskForm {...props} />
      <TaskList {...props} active="1" />
      <hr />
      <TaskList {...props} active="0" />
    </div>
  );
};


export default Page;