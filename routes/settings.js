userinfo = require('../userinfo.json');

exports.view	=	function(req,	res){	
	res.render('settings', userinfo);	
}