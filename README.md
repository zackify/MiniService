##MiniService

Just a little project i made to help myself understand how express / Koa works.

### Installing MiniService

	npm install miniservice
	
###Creating your app
	
	var MiniService = require('MiniService');
	var App = new MiniService();
Making a route is super easy:

	App.route('test',function(params){
		console.log(params.get,params.post)
		return {user: 'test', email: 'wow'}
	})

`params` is an object that contains get and post varaibles.

###Serve your app

	App.serve(1337)
