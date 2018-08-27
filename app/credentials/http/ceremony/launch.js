exports = module.exports = function() {

  function redirect(req, res, next) {
    var options = req.locals || {};
    
    console.log('LAUNCH NEW CREDENTIAL!');
  }


  return [
    redirect
  ];
};

exports['@require'] = [];
