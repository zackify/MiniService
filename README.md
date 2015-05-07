##MiniService

After being stuck with express.js and all of its annoying middleware, 
I decided to make something super small for building out little apis.
The end goal is to at least have some built in authentication stuff and database integration.

###Creating your app
	
	var MiniService = require('./MiniService');
	var App = new MiniService();
Making a route is super easy:

	App.route('test',function(params){
		console.log(params.get,params.post)
		return {user: 'test', email: 'wow'}
	})

`params` is an object that contains get and post varaibles.

###Serve your app

	App.serve(1337)