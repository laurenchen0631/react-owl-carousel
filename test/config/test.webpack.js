require('phantomjs-polyfill');

var context = require.context('../', false, /\.js$/);
context.keys().forEach(context);
