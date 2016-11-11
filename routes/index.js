
/*
 * GET home page.
 */
userinfo = require('../userinfo.json');

exports.view	=	function(req,	res){
	if(userinfo.user[userinfo.user.length-1] < 0){
		console.log("nothing");
	}
	
	res.render('index');	
}

