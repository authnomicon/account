exports = module.exports = function(parse, csrfProtection, authenticate, state, session) {
  
  function select(req, res, next) {
    console.log('select this account:');
    console.log(req.body);
    console.log(req.user);
  }
  
  function redirect(req, res, next) {
    res.redirect('/');
  }
  
  
  return [
    session(),
    parse('application/x-www-form-urlencoded'),
    csrfProtection(),
    state(),
    //authenticate('anonymous'),
    select,
    redirect
  ];
};

exports['@require'] = [
  'http://i.bixbyjs.org/http/middleware/parse',
  'http://i.bixbyjs.org/http/middleware/csrfProtection',
  'http://i.bixbyjs.org/http/middleware/authenticate',
  'http://i.bixbyjs.org/http/middleware/state',
  'http://i.bixbyjs.org/http/middleware/session'
];
