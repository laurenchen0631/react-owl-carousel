require('phantomjs-polyfill/bind-polyfill');

var context = require.context('../', false, /\.js$/);
context.keys().forEach(context);
