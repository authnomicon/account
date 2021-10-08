exports = module.exports = function(promptHandler, enrollHandler) {
  var express = require('express');
  
  var router = new express.Router();
  router.get('/', promptHandler);
  router.post('/', enrollHandler);
  
  return router;
};

exports['@implements'] = 'http://i.bixbyjs.org/http/Service';
exports['@path'] = '/account/create';
exports['@require'] = [
  './handlers/prompt',
  './handlers/enroll'
];
