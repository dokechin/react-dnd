"use strict";

var React = require('react');

var DocsHTMLWrapper = require('./DocsHTMLWrapper');

var TableAPIHTML = require('../../docs/ColumnAPI.md');
var Constants = require('../Constants');

var ColumnAPIPage = React.createClass({
  render() {
    return (
      <DocsHTMLWrapper
        html={TableAPIHTML}
        example={Constants.APIPages.COLUMN_API}
      />
    );
  }
});

module.exports = ColumnAPIPage;
