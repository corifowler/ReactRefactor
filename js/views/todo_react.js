import React from 'react';

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
            onAddClick={() => alert('want to add')}/>
          <ToDoList
            onMarkComplete={() => alert('finished!')}/>
        </main>
        <footer>
          <ClearButton 
            onClearComplete={() => alert('want to clear')}/>
        </footer>
      </div>
    );
  }

});