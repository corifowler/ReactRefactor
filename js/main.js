import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Backbone from 'backbone';

import './ajax_setup';

import {TodoModel} from './resources';
import {TodoCollection} from './resources';

import {AddTask} from './views';
import {ToDoList} from './views';
import {ClearButton} from './views';


let el = document.querySelector('.app');

let todos = new TodoCollection();

let ToDoView = React.createClass ({

  render() {
    return (
      <div className='wrapper'>
        <header>
          <h1>Things To Do</h1>
        </header>
        <main>
          <AddTask
            onAddClick={() => {
              let newTask = document.querySelector('.todo-title').value;
              let taskModel = new TodoModel({
                title: newTask
              });
              taskModel.save().then(() => {
                location.reload(true);
              });
            }}/>
          <ToDoList
            items={todos.toJSON()}
            onMarkComplete={() => {
              let status = completed ? 'undo' : 'remove';
            }}
            className={status}/>
        </main>
        <footer>
          <ClearButton 
            onClearComplete={() => alert('want to clear')}/>
        </footer>
      </div>
    );
  }
});

todos.fetch().then(() => {  
  ReactDom.render(<ToDoView/>, el);
});


















// import $ from 'jquery';
// import _ from 'underscore';
// import moment from 'moment';
// import Backbone from 'backbone';
// import parse from './parse_auth';
// import {TodoCollection} from './resources';
// import {TodoView} from './views';

// $.ajaxSetup({
//   headers: {
//     'X-Parse-Application-Id': parse.APP_ID,
//     'X-Parse-REST-API-Key': parse.API_KEY
//   }
// });

// let todos = new TodoCollection();

// todos.fetch().then(function() {
  
//   $('.wrapper').html(new TodoView(todos).render().$el);

// });


// console.log('Hello, World');
