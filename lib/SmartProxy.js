


	var   Class 			= require( "ee-class" )
		, EventEmitter 		= require( "ee-event-emitter" )
		, log 				= require( "ee-log" );


	var   ControlInterface 	= require( "./ControllerInterface" )
		, Proxy 			= require( "./Proxy" );





	module.exports = new Class( {


		clients: []


		, init: function(){
			new ControlInterface();
		}


		, onRequest: function(){

		}
	} );

