import React from 'react';

export default React.createClass({

  getInitialState() {
    return (
      {completed: false},
      {buttonStatus: 'remove'},
      {spanStatus: 'title '},
      {iconStatus: 'fa fa-close'}
    );
  },

  markComplete() {
    
    this.setState({completed: true});

    let buttonStatus = this.state.completed ? 'undo' : 'remove';
    let spanStatus = this.state.completed ? 'title complete' : 'title';
    let iconStatus = this.state.completed ? 'fa fa-undo' : 'fa fa-close';
    this.setState({buttonStatus},{spanStatus},{iconStatus});
    this.props.onMarkComplete(
      this.state.buttonStatus,
      this.state.spanStatus,
      this.state.iconStatus
    );
  },

  processData(data) {
    return (
      <li key={data.objectId}>
        <span className={this.state.spanStatus}>{data.title}</span>
        <button onClick={this.markComplete} 
          className={this.state.buttonStatus}
          id={data.objectId}>
          <i className={this.state.iconStatus}/>
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