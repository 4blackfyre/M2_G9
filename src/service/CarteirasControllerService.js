'use strict';


/**
 * Create Carteira
 *
 * body Carteira  (optional)
 * returns Carteira
 **/
exports.createCarteira = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : "2000-01-23T04:56:07.000+00:00",
  "numerolivros" : 1,
  "id" : 0,
  "numerofilmes" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete Carteira
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteCarteira = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve Carteira
 *
 * id Long 
 * returns Carteira
 **/
exports.retrieveCarteira = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : "2000-01-23T04:56:07.000+00:00",
  "numerolivros" : 1,
  "id" : 0,
  "numerofilmes" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve Carteiras
 *
 * returns List
 **/
exports.retrieveCarteiras = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "data" : "2000-01-23T04:56:07.000+00:00",
  "numerolivros" : 1,
  "id" : 0,
  "numerofilmes" : 6
}, {
  "data" : "2000-01-23T04:56:07.000+00:00",
  "numerolivros" : 1,
  "id" : 0,
  "numerofilmes" : 6
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Carteira
 *
 * body Carteira 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateCarteira = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

