import React from 'react';

export default React.createClass({

  clearClick(event) {
    event.preventDefault();
    this.props.onClearComplete();
  },

  render() {
    return (
      <button 
        onClick={this.clearClick} 
        className='clear'>Clear Complete
      </button>
    );
  }


});