'use strict';


/**
 * Create filme
 *
 * body Filme  (optional)
 * returns Filme
 **/
exports.createFilme = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ano" : "ano",
  "elenco" : "elenco",
  "nome" : "nome",
  "id" : 0,
  "realizador" : "realizador",
  "produtora" : "produtora"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete filme
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteFilme = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve filme
 *
 * id Long 
 * returns Filme
 **/
exports.retrieveFilme = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ano" : "ano",
  "elenco" : "elenco",
  "nome" : "nome",
  "id" : 0,
  "realizador" : "realizador",
  "produtora" : "produtora"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve filmes
 *
 * returns List
 **/
exports.retrieveFilmes = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "ano" : "ano",
  "elenco" : "elenco",
  "nome" : "nome",
  "id" : 0,
  "realizador" : "realizador",
  "produtora" : "produtora"
}, {
  "ano" : "ano",
  "elenco" : "elenco",
  "nome" : "nome",
  "id" : 0,
  "realizador" : "realizador",
  "produtora" : "produtora"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update filme
 *
 * body Filme 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateFilme = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

