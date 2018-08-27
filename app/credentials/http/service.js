exports = module.exports = function(newHandler) {
  var express = require('express');
  var router = new express.Router();
  
  router.get('/new', newHandler);
  
  return router;
};

exports['@implements'] = [
  'http://i.bixbyjs.org/http/Service',
  'http://schemas.authnomicon.org/js/account/credentials/HTTPService'
];
exports['@path'] = '/credentials';
exports['@require'] = [
  './handlers/new'
];
