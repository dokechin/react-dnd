"use strict";

var React = require('react');

var Header = require('../components/Header');
var PageBody = require('../components/PageBody');
var StaticHTMLBlock = require('../components/StaticHTMLBlock');

var ReadMeHTML = require('../../README.md');

var HomePage = React.createClass({
  render() {
    return (
      <div>
        <Header showCover />

        <PageBody>
          <StaticHTMLBlock html={ReadMeHTML} />
        </PageBody>
      </div>
    );
  }
});

module.exports = HomePage;
