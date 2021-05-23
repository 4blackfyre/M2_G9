'use strict';


/**
 * Create Utilizador
 *
 * body Utilizador  (optional)
 * returns Utilizador
 **/
exports.createUtilizador = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "",
  "nome" : "nome",
  "id" : 0,
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete Utilizador
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteUtilizador = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve Utilizador
 *
 * id Long 
 * returns Utilizador
 **/
exports.retrieveUtilizador = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "",
  "nome" : "nome",
  "id" : 0,
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve Utilizadores
 *
 * returns List
 **/
exports.retrieveUtilizadores = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "password" : "",
  "nome" : "nome",
  "id" : 0,
  "email" : "email"
}, {
  "password" : "",
  "nome" : "nome",
  "id" : 0,
  "email" : "email"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Utilizador
 *
 * body Utilizador 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateUtilizador = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

