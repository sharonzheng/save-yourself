data = require('../data.json');
userinfo = require('../userinfo.json');

exports.view =	function(req,	res)	{
	var	name	=	req.params.name;
		res.render('login', userinfo);
}
