'use strict';


/**
 * Create Servico
 *
 * body Servico  (optional)
 * returns Servico
 **/
exports.createServico = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "horario" : "horario",
  "emprestimo" : "emprestimo",
  "nome" : "nome",
  "id" : 0,
  "morada" : "morada"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete Servico
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteServico = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve Servico
 *
 * id Long 
 * returns Servico
 **/
exports.retrieveServico = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "horario" : "horario",
  "emprestimo" : "emprestimo",
  "nome" : "nome",
  "id" : 0,
  "morada" : "morada"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve Servicos
 *
 * returns List
 **/
exports.retrieveServicos = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "horario" : "horario",
  "emprestimo" : "emprestimo",
  "nome" : "nome",
  "id" : 0,
  "morada" : "morada"
}, {
  "horario" : "horario",
  "emprestimo" : "emprestimo",
  "nome" : "nome",
  "id" : 0,
  "morada" : "morada"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Servico
 *
 * body Servico 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateServico = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

