/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

"use strict";

var React = require('react');

var ExampleHeader = require('../examples/ExampleHeader');
var ExamplesWrapper = require('../examples/ExamplesWrapper');
var TouchExampleWrapper = require('../examples/TouchExampleWrapper');

var Constants = require('../Constants');
var ExamplePages = Constants.ExamplePages;

var ExamplesPage = React.createClass({
  getInitialState() {
    return {
      renderPage: false
    };
  },

  render() {
    return (
      <ExamplesWrapper {...this.props}>
        <ExampleHeader {...this.props} />
        {this.state.renderPage && this._renderPage()}
      </ExamplesWrapper>
    );
  },

  _renderPage() {
    // Require common FixedDataTable CSS.
    require('fixed-data-table/css/Scrollbar.css');
    require('fixed-data-table/css/fixedDataTable.css');
    require('fixed-data-table/css/fixedDataTableCell.css');
    require('fixed-data-table/css/fixedDataTableCellGroup.css');
    require('fixed-data-table/css/fixedDataTableColumnResizerLine.css');
    require('fixed-data-table/css/fixedDataTableRow.css');

    switch (this.props.example) {
      case ExamplePages.OBJECT_DATA_EXAMPLE:
        var ObjectDataExample = require('../examples/ObjectDataExample');
        return (
          <TouchExampleWrapper {...this.state}>
            <ObjectDataExample />
          </TouchExampleWrapper>
        );
      case ExamplePages.RESIZE_EXAMPLE:
        var ResizeExample = require('../examples/ResizeExample');
        return (
          <TouchExampleWrapper {...this.state}>
            <ResizeExample />
          </TouchExampleWrapper>
        );
      case ExamplePages.FLEXGROW_EXAMPLE:
        var FlexGrowExample = require('../examples/FlexGrowExample');
        return (
          <TouchExampleWrapper {...this.state}>
            <FlexGrowExample />
          </TouchExampleWrapper>
        );
      case ExamplePages.COLUMN_GROUPS_EXAMPLE:
        var ColumnGroupsExample = require('../examples/ColumnGroupsExample');
        return (
          <TouchExampleWrapper {...this.state}>
            <ColumnGroupsExample />
          </TouchExampleWrapper>
        );
    }
  },

  componentDidMount() {
    this._update();
    var win = window;
    if (win.addEventListener) {
      win.addEventListener('resize', this._onResize, false);
    } else if (win.attachEvent) {
      win.attachEvent('onresize', this._onResize);
    } else {
      win.onresize = this._onResize;
    }
  },

  _onResize() {
    clearTimeout(this._updateTimer);
    this._updateTimer = setTimeout(this._update, 16);
  },

  _update() {
    var win = window;

    var widthOffset = win.innerWidth < 680 ? 0 : 240;

    this.setState({
      renderPage: true,
      tableWidth: win.innerWidth - widthOffset,
      tableHeight: win.innerHeight - 200,
    });
  }
});

module.exports = ExamplesPage;
