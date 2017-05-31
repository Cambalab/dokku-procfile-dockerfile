var express = require('express'), app = express();
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
    console.log('Args ' + process.argv);
});

app.get('/', function (req, res) {
  var ret = {
    args: process.argv,
    env: process.env,
  }
  res.json(ret);
})

