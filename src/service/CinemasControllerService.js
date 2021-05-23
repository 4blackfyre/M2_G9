'use strict';


/**
 * Create Cinema
 *
 * body Cinema  (optional)
 * returns Cinema
 **/
exports.createCinema = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "horario" : "horario",
  "nome" : "nome",
  "id" : 0,
  "local" : "local"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete Cinema
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteCinema = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve Cinema
 *
 * id Long 
 * returns Cinema
 **/
exports.retrieveCinema = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "horario" : "horario",
  "nome" : "nome",
  "id" : 0,
  "local" : "local"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve Cinemas
 *
 * returns List
 **/
exports.retrieveCinemas = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "horario" : "horario",
  "nome" : "nome",
  "id" : 0,
  "local" : "local"
}, {
  "horario" : "horario",
  "nome" : "nome",
  "id" : 0,
  "local" : "local"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Cinema
 *
 * body Cinema 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateCinema = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

