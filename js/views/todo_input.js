import React from 'react';

export default React.createClass({

  submitItem() {
    this.props.addClick();
  },

  render() {
    return(
      <form className="todo-add">
        <input type="text" name="title" placeholder="Add something"/>
        <button onClick={this.submitItem}><i className="fa fa-plus"/></button>
      </form>
    );
  }

});