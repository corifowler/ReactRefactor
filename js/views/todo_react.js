import React from 'react';

import {TodoModel} from './resources';
import {TodoCollection} from './resources';

import AddTask from './todo_input';
import ToDoList from './todo_list';

export default React.createClass({

  render() {
    return (
      <div className='wrapper'>
        <header>
          <h1>Things To Do</h1>
        </header>
        <main>
          <AddTask
            onAddClick={() => {
              let newTask = document.querySelector('.fa-plus');
              let taskModel = new TodoModel({
                title: newTask
              });
              taskModel.save().then(() => {
                location.reload(true);
              });
            }}/>
          <ToDoList
            onMarkComplete={() => {}}/>
        </main>
        <footer>
          <ClearButton 
            onClearComplete={() => alert('want to clear')}/>
        </footer>
      </div>
    );
  }

});