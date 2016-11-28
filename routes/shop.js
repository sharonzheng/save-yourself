userinfo = require('../userinfo.json');

exports.view	=	function(req,	res){	
	res.render('shop',userinfo);	
}

exports.submit = function(req,res){
	
	if(userinfo.user[userinfo.user.length-1].income <= 0){
		userinfo.user[userinfo.user.length-1].warning = 'You cannot purchase anything your pet is dead :(';
		res.render('shop',userinfo);
	}
	else if(userinfo.user[userinfo.user.length-1].coins < 1000){
		userinfo.user[userinfo.user.length-1].warning = 'You have insufficient coins to purchase this item.';
		res.render('shop',userinfo);
	}
	else {
		userinfo.user[userinfo.user.length-1].coins -= 1000;
		userinfo.user[userinfo.user.length-1].dog = '/images/dog_custom.gif';

		console.log("userinfo.user");
		console.log(userinfo.user);
		res.redirect('/home');
	}
}