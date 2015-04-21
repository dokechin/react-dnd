"use strict";

var React = require('react');

require('./Example.less');

var Example = React.createClass({
  render() {
    return (
      <div className="Example">
        <div className="Example-header">
          <p>Try the example (<a href="#">source</a>):</p>
        </div>
        <div className="Example-container">
          <div className="Example-list">
            <div className="Example-listItem"></div>
            <div className="Example-listItem"></div>
            <div className="Example-listItem"></div>
            <div className="Example-listItem"></div>
            <div className="Example-listItem"></div>
          </div>

          <div className="Example-list">
            <div className="Example-listItem"></div>
            <div className="Example-listItem"></div>
            <div className="Example-listItem"></div>
          </div>

          <div className="Example-list">
            <div className="Example-listItem"></div>
            <div className="Example-listItem"></div>
            <div className="Example-listItem"></div>
            <div className="Example-listItem"></div>
            <div className="Example-listItem"></div>
            <div className="Example-listItem"></div>
          </div>

          <div className="Example-list">
            <div className="Example-listItem"></div>
            <div className="Example-listItem"></div>
            <div className="Example-listItem"></div>
            <div className="Example-listItem"></div>
            <div className="Example-listItem"></div>
          </div>
        </div>
      </div>
    );
  },
});

module.exports = Example;
