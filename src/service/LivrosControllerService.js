'use strict';


/**
 * Create Livro
 *
 * body Livro  (optional)
 * returns Livro
 **/
exports.createLivro = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "escritor" : "escritor",
  "isbn" : 0,
  "titulo" : "titulo",
  "editora" : "editora"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete Livro
 *
 * isbn Long 
 * no response value expected for this operation
 **/
exports.deleteLivro = function(isbn) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve Livro
 *
 * isbn Long 
 * returns Livro
 **/
exports.retrieveLivro = function(isbn) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "escritor" : "escritor",
  "isbn" : 0,
  "titulo" : "titulo",
  "editora" : "editora"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve Livros
 *
 * returns List
 **/
exports.retrieveLivros = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "escritor" : "escritor",
  "isbn" : 0,
  "titulo" : "titulo",
  "editora" : "editora"
}, {
  "escritor" : "escritor",
  "isbn" : 0,
  "titulo" : "titulo",
  "editora" : "editora"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Livro
 *
 * body Livro 
 * isbn Long 
 * no response value expected for this operation
 **/
exports.updateLivro = function(body,isbn) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

