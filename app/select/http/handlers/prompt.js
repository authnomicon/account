exports = module.exports = function(csrfProtection, authenticate, state, session) {
  var path = require('path')
    , ejs = require('ejs');


  function prompt(req, res, next) {
    console.log('PROMPT SELECT');
    console.log(req.user);
    
    
    res.locals.csrfToken = req.csrfToken();
    res.locals.accounts = [ req.user ];
    
    res.render('account/select', function(err, str) {
      if (err && err.view) {
        var view = path.resolve(__dirname, '../views/prompt.ejs');
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
    session(),
    csrfProtection(),
    state(),
    authenticate('session'),
    prompt
  ];
};

exports['@require'] = [
  'http://i.bixbyjs.org/http/middleware/csrfProtection',
  'http://i.bixbyjs.org/http/middleware/authenticate',
  'http://i.bixbyjs.org/http/middleware/state',
  'http://i.bixbyjs.org/http/middleware/session'
];
