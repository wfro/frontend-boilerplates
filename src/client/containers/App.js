import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        Hi pizza
        {this.props.children}
      </div>
    );
  },
})
