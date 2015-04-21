"use strict";

var React = require('react');

var DocsHTMLWrapper = require('./DocsHTMLWrapper');

var TableAPIHTML = require('../../docs/ColumnGroupAPI.md');
var Constants = require('../Constants');

var ColumnGroupAPIPage = React.createClass({
  render() {
    return (
      <DocsHTMLWrapper
        html={TableAPIHTML}
        example={Constants.APIPages.COLUMNGROUP_API}
      />
    );
  }
});

module.exports = ColumnGroupAPIPage;
