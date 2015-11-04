import React from 'react';

export default React.createClass({

  getInitialState() {
    return (
      {completed: false}
    );
  },

  markComplete(event) {
    event.preventDefault();
    this.setState({completed: true});
    this.props.onMarkComplete();
  },

  processData(data) {
    return (
      <li key={data.objectId}>
        <span className='title'>{data.title}</span>
        <button onClick={this.markComplete} 
          className='remove'
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