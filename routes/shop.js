userinfo = require('../userinfo.json');

exports.view	=	function(req,	res){	
	res.render('shop',userinfo);	
}

exports.submit = function(req,res){
	

	userinfo.user[userinfo.user.length-1].coins -= 1000;
	userinfo.user[userinfo.user.length-1].dog = '/images/dog_custom.gif';

	console.log("userinfo.user");
	console.log(userinfo.user);
	res.redirect('/home');
}