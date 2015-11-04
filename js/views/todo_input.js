import React from 'react';

export default React.createClass({

  submitItem() {
    this.props.onAddClick();
  },

  render() {
    return (
      <form className='todo-add'>
        <input type='text' className='todo-title' 
        name='title' placeholder='Add something'/>
        <button onClick={this.submitItem}><i className='fa fa-plus'/></button>
      </form>
    );
  }

});