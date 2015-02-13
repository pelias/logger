/**
 * The main module of the logger package.
 */

'use strict';

var winston = require( 'winston' );

function createLogger( loggerOpts ){
  if( loggerOpts === undefined ){
    loggerOpts = {
      transports: [
        new winston.transports.Console( {
          colorize: true, timestamp: true
        })
      ]
    };
  }

  return new winston.Logger( loggerOpts );
}

var loggers = {};

/**
 * If a logger named `name` exists, return it; otherwise, create a new one.
 */
function getLogger( name, loggerOpts ){
  if( name in loggers ){
    return loggers[ name ];
  }
  else {
    var logger = new createLogger( loggerOpts );
    loggers[ name ] = logger;
    return logger;
  }
}

module.exports = {
  get: getLogger,
  winston: winston
};
