var MiniService = require('./MiniService');
var App = new MiniService();

App.route('test',function(params){
	console.log(params)
	return {user: 'test', email: 'wow'}
})

App.route('profile',function(params){
	return 'Hey user!'
})

App.serve(1337)