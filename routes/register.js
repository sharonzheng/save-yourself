data = require('../data.json');
userinfo = require('../userinfo.json');

exports.view =	function(req,	res)	{
	var	name	=	req.params.name;
		res.render('register');
}

exports.submit = function(req, res){
	//console.log(req.body.username);
	var info = {username: req.body.username, 
		password:req.body.password, 
		name: req.body.name,
		pet: "dog",
		initial: 0,
		income: 0, 
		coins: 0,
		rent: 0,
		util: 0,
		misc: 0,
		total: 0,
		num: 0,
		img1: '/images/info.png',
		dog: '/images/dog.gif',
		hp: 100,
		inputs: []};
	userinfo.user.push(info);
	data.user.push(info);
	res.redirect('/create');
}


