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
    }
  }

  return new winston.Logger( loggerOpts );
}

var loggers = {};

function getLogger( name, loggerOpts ){
  if( name in loggers ){
    console.log( 'get' );
    return loggers[ name ];
  }
  else {
    console.log( 'create' );
    var logger = new createLogger( loggerOpts );
    loggers[ name ] = logger;
    return logger;
  }
}

module.exports = {
  get: getLogger,
  winston: winston
}
