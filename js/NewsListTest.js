var $ = require('jquery');
var NewsList = require('./NewsList');
var ReactDOM = require('react-dom');
var React = require('react');

$.ajax({
	url: '/json/items.json'
}).then(function(items) {
	ReactDOM.render(<NewsList items={items}/>, document.getElementById('content'));
});