



	var   Class				= require( "ee-class" )
		, log 				= require( "ee-log" )
		, Request 			= require( "request" )
		, formidable 			= require( "formidable" )
		, FormDataReader 	= require( "ee-formdata-reader" );





	var x = module.exports = new Class( {


		init: function( options ){
			this.manager = options.manager;
		}



		// a client registers itself as a client for the proxy
		, post: function( request, response, next ){
			var start = Date.now();
			var formdata = new FormDataReader( request ).on( "end", function(){
				//log( formdata.getForm() );
				console.log( Date.now() - start );
			} );
			

			response.send( 200 );
		}
	} );