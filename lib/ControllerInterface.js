


	var   Class 			= require( "ee-class" )
		, EventEmitter 		= require( "ee-event-emitter" )
		, log 				= require( "ee-log" )
		, Rest 				= require( "em-rest" )
		, WebService 		= require( "ee-webservice" )
		, path 				= require( "path" )
		, project 			= require( "ee-project" );



	
	module.exports = new Class( {

		// availabel client list
		clients: []

		// mapping fo clients & ips
		, clientMap: {}


		, init: function(){
			this.initialize();
		}



		, initialize: function(){
			// start webservice
			this.service = new WebService( {
				http: project.config.controller
			} );


			// load rest controllers
			this.rest = new Rest( {
				  path: path.join( __dirname, "../ControllerInterface" )
				, options: {
					manager: this
				}
			} );


			// listen
			this.service.use( this.rest );
			this.service.listen();
		}
	} );

