'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./components/list.jsx');

ReactDOM.render(React.createElement(List, null), document.getElementById('ingredients'));