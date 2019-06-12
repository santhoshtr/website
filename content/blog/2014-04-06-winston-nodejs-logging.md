---
title: Configurable node logger with winston
author: Santhosh Thottingal
type: post
date: 2014-04-06T06:43:21+00:00
url: /blog/2014/04/06/winston-nodejs-logging/
categories:
  - Misc
  - Projects
tags:
  - javascript
  - logger
  - nodejs
  - winston

---
For an advanced logging system for nodejs applications, [winston][1] is very helpful. Winston is a multi-transport async logging library for node.js. Similar to famous logging systems like log4j, we can configure the log levels and winston allows to define multiple logging targets like file, console, database etc.

I wanted to configure logging as per usual nodejs production vs development environment. Of course with development mode, I am more interested in debug level logging and at production environment I am more interested in higher level logs.

I am sharing my singleton logger instance setup code.

<noscript>
  <pre><code class="language-javascript javascript">var winston = require( 'winston' ),
	fs = require( 'fs' ),
	logDir = 'log', // Or read from a configuration
	env = process.env.NODE_ENV || 'development',
	logger;

winston.setLevels( winston.config.npm.levels );
winston.addColors( winston.config.npm.colors );

if ( !fs.existsSync( logDir ) ) {
	// Create the directory if it does not exist
	fs.mkdirSync( logDir );
}
logger = new( winston.Logger )( {
	transports: [
		new winston.transports.Console( {
			level: 'warn', // Only write logs of warn level or higher
			colorize: true
		} ),
		new winston.transports.File( {
			level: env === 'development' ? 'debug' : 'info',
			filename: logDir + '/logs.log',
			maxsize: 1024 * 1024 * 10 // 10MB
		} )
    ],
	exceptionHandlers: [
		new winston.transports.File( {
			filename: 'log/exceptions.log'
		} )
    ]
} );

module.exports = logger;


// Use this singleton instance of logger like:
// logger = require( 'Logger.js' );
// logger.debug( 'your debug statement' );
// logger.warn( 'your warning' );</code></pre>
</noscript>

&nbsp;

 [1]: https://github.com/flatiron/winston