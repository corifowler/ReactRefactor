import React from 'react';

export default React.createClass({

  clearClick() {
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