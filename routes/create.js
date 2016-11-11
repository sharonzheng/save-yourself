userinfo = require('../userinfo.json');

exports.view =	function(req,	res)	{
	var	name	=	req.params.name;
		res.render('create');
}

exports.submit = function(req,res){
	console.log(userinfo.user);
	console.log("pet: " + req.body.switchimg);
	userinfo.user[userinfo.user.length-1].pet = req.body.switchimg;
	console.log(userinfo.user);
	res.redirect('/hpconfig');
}