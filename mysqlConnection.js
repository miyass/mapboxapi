var mysql = require('mysql');

// var dbconfig = {
//   host: '127.0.0.1',
//   user: 'root',
//   password: '',
//   database: 'map_clip',
// };

var dbconfig = {
  host: 'us-cdbr-iron-east-05.cleardb.net',
  user: 'be8496157a0752',
  password: '457f26d6',
  database: 'heroku_80b7f435f55a87a'
};

var connection = mysql.createConnection(dbconfig);

setInterval(function() {
  connection.query('SELECT 1');
}, 5000);

module.exports = connection;
