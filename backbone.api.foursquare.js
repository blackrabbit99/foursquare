/*
Usage: 

	var data = new Backbone.API.Foursquare.Models.User();
	
	or
	
	var data = new Foursquare.Models.User();
	
});
*/

(function(_, Backbone) {
  
	// Fallbacks
	if( _.isUndefined(Backbone.API) ) Backbone.API = {};
	var APP = {};
	// support the APP namespace (if available)
	var Model = Backbone.Model;
	var View = Backbone.View;
	var Collection = Backbone.Collection;
	
	
	// main request method
	Backbone.API.Foursquare = Collection.extend({
		
	});
	
	// namespace
	Backbone.API.Foursquare.Models = {};
	Backbone.API.Foursquare.Collections = {};
	Backbone.API.Foursquare.Views = {};
	

	// **Models**: ...
	
	Backbone.API.Foursquare.Models.User = Model.extend({
		defaults: { }, 
		url: function(){ return "users/"+ this.get("id") }, 
		initialize: function(){
			// call cache on every state change
			// add the access token
			//this.token = access.token;
		}, 
		parse: function( data ){
			return (data.user) ? data.user : data;
		}
	});
	
	Backbone.API.Foursquare.Models.Me = Backbone.API.Foursquare.Models.User.extend({
		defaults : { 
			id : "self" 
		}
	});
	
	Backbone.API.Foursquare.Models.AddCheckin = Model.extend({
		defaults : { 
			venueId : 0
		}, 
		url : "checkins/add"
	});
	
	Backbone.API.Foursquare.Models.Friend = Model.extend({
		defaults: { }, 
		initialize: function(){
			// call cache on every state change
			
		}, 
		parse: function( data ){
			return (data.user) ? data.user : data;
		}
	});
	
	Backbone.API.Foursquare.Models.Venue = Model.extend({
		defaults: { }, 
		initialize: function(){
			// call cache on every state change
			
		}
	});
	
	
	
	// **Collections**: ...
	
	Backbone.API.Foursquare.Collections.Tips = Collection.extend({
		options: {
			user: "self"
		}, 
		defaults: { }, 
		url: function(){ return "users/"+ this.options.user +"/tips" }, 
		initialize: function(){
			// call cache on every state change
			
		}, 
		parse: function( data ){
			console.log(data);
			return (data.tips) ? data.tips.items : data;
		}
	});
	
	Backbone.API.Foursquare.Collections.Friends = Collection.extend({
		options: {
			user: "self"
		}, 
		url: function(){ return "users/"+ this.options.user +"/friends" }, 
		initialize: function(){
			// call cache on every state change
		}, 
		parse: function( data ){
			return (data.friends) ? data.friends.items : data;
		}
	});
	
	
	Backbone.API.Foursquare.Collections.Venues = Collection.extend({
		url: function(){ 
			return "https://api.foursquare.com/v2/venues/search?"
				+ "ll=50.039268,36.219718"
				+"&radius=500"
				+"&oauth_token=AYCC4205M5IWFUEQTGV2RVC4FSJTIYFTK1ASS3M1CJYQHYJP";
		}, 
		initialize: function(){
			// call cache on every state change
			
		}, 
		parse: function( data ){
			//console.log( data );
			return (data.venues) ? data.venues : data;
		}
	});
	
	
	
// Shortcut
if(typeof window.Foursquare == "undefined"){
	window.Foursquare = Backbone.API.Foursquare;
}
	
})(this._, this.Backbone);