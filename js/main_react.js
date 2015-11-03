import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Backbone from 'backbone';

import './ajax_setup';
import {ToDoView} from './views';
import {TodoCollection} from './resources';

let el = document.querySelector('.app');

let todos = new TodoCollection();

todos.fetch().then(() => {  
  ReactDom.render(
    <ToDoView/>
  );
});
