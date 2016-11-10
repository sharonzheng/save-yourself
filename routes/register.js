data = require('../data.json');

exports.view =	function(req,	res)	{
	var	name	=	req.params.name;
		res.render('register');
}
exports.submit = function(req, res){
	//console.log(req.body.username);
	var info = {username: req.body.username, password:req.body.password, name: req.body.name, coins: 0};
	data.user.push(info);
	res.redirect('/create');
}