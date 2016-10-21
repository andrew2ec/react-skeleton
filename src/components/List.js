'use strict';

var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [{ "id": 1, "text": "ham" }, { "id": 2, "text": "cheese" }, { "id": 3, "text": "bacon" }];

var List = React.createClass({
   displayName: 'List',

   render: function render() {
      var listItem = ingredients.map(function (item) {
         React.createElement(ListItem, { key: item.id, ingredient: item.text });
      });
      return React.createElement(
         'ul',
         null,
         listItem
      );
   }
});

module.exports = List;