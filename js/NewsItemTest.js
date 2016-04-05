var $ = require('jquery');
var NewsItem = require('./NewsItem');
var ReactDOM = require('react-dom');
var React = require('react');

$.ajax({
    url: '/json/items.json'
}).then(function(items) {
	// Log the data so we can inspect it in the developer console.
	console.log('items', items);
	// Use a fake rank for now.
	ReactDOM.render(<NewsItem item={items[0]} rank={1}/>, $('#content')[0]);
});
