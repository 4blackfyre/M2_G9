'use strict';


/**
 * Create Tema
 *
 * body Tema  (optional)
 * returns Tema
 **/
exports.createTema = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "descrição" : "descrição",
  "nome" : "nome",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete Tema
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteTema = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve Tema
 *
 * id Long 
 * returns Tema
 **/
exports.retrieveTema = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "descrição" : "descrição",
  "nome" : "nome",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve Temas
 *
 * returns List
 **/
exports.retrieveTemas = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "descrição" : "descrição",
  "nome" : "nome",
  "id" : 0
}, {
  "descrição" : "descrição",
  "nome" : "nome",
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Temas
 *
 * body Tema 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateTema = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

