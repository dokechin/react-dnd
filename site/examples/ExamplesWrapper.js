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

var Header = require('../components/Header');
var SideBar = require('../components/SideBar');
var PageBody = require('../components/PageBody');

var Constants = require('../Constants');

var ExamplesWrapper = React.createClass({
  render() {
    return (
      <div>
        <Header />

        <PageBody>
          <SideBar
            title="Examples"
            pages={Constants.ExamplePages}
            example={this.props.example}
          />

          <div>
            {this.props.children}
          </div>
        </PageBody>
      </div>
    );
  }
});

module.exports = ExamplesWrapper;
