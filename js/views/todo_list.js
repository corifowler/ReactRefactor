import React from 'react';

export default React.createClass({

  getInitialState() {
    return (
      {completed: false},
      {status: 'remove'}
    );
  },

  markComplete() {
    this.setState({completed: true});
    let status = this.state.completed ? 'undo' : 'remove';
    this.setState({status});
    this.props.onMarkComplete();
  },

  processData(data) {
    return (
      <li key={data.objectId}>
        <span className='title'>{data.title}</span>
        <button onClick={this.markComplete} 
          className={this.state.status}
          id={data.objectId}>
          <i className='fa fa-close'/>
        </button>
      </li>
    );
  },

  render() {
    return (
      <ul className='todo-list'>{this.props.items.map(this.processData)}</ul>
    );
  }

});