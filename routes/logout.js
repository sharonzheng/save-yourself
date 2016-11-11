userinfo = require('../userinfo.json');

exports.view	=	function(req,	res){	
	res.render('logout');
}

exports.submit = function(req, res){
	//console.log(req.body.username);
	console.log(userinfo.user);
	userinfo.user.splice(0,1);
	console.log(userinfo.user);
	res.redirect('/');
}