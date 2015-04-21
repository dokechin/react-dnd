"use strict";

var React = require('react');

var DocsHTMLWrapper = require('./DocsHTMLWrapper');

var TableAPIHTML = require('../../docs/TableAPI.md');
var Constants = require('../Constants');

var TableAPIPage = React.createClass({
  render() {
    return (
      <DocsHTMLWrapper
        html={TableAPIHTML}
        example={Constants.APIPages.TABLE_API}
      />
    );
  }
});

module.exports = TableAPIPage;
