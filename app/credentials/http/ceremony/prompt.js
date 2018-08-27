exports = module.exports = function() {
  var path = require('path')
    , ejs = require('ejs');
  
  
  function render(req, res, next) {
    res.locals.csrfToken = req.csrfToken();
    
    res.render('credentials/new', function(err, str) {
      if (err && err.view) {
        var view = path.resolve(__dirname, '../views/new.ejs');
        //var view = path.resolve(__dirname, '../views/identifier-first.ejs');
        ejs.renderFile(view, res.locals, function(err, str) {
          if (err) { return next(err); }
          res.send(str);
        });
        return;
      } else if (err) {
        return next(err);
      }
      res.send(str);
    });
  };
  

  return [
    render
  ];
};

exports['@require'] = [];
