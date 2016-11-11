userinfo = require('../userinfo.json');

exports.view =	function(req,	res)	{
	var	name	=	req.params.name;
		res.render('hpconfig');
}

exports.submit = function(req,res){
	console.log(userinfo.user);
	console.log("income: " + req.body.income);
	userinfo.user[userinfo.user.length-1].income = req.body.income;
	userinfo.user[userinfo.user.length-1].initial = req.body.income;

	var info = { Rent : req.body.amount }; 
	if(req.body.dselect === "Rent"){
		info = { Rent : req.body.amount };
		userinfo.user[userinfo.user.length-1].rent += parseInt(req.body.amount);
		userinfo.user[userinfo.user.length-1].total += parseInt(req.body.amount);
		userinfo.user[userinfo.user.length-1].num++;
	}
	else if(req.body.dselect === "Utilities"){
		info = { Utilities : req.body.amount };
		userinfo.user[userinfo.user.length-1].util += parseInt(req.body.amount);
		userinfo.user[userinfo.user.length-1].total += parseInt(req.body.amount);
		userinfo.user[userinfo.user.length-1].num++;
	}
	else if(req.body.dselect === "Misc"){
		info = { Misc : req.body.amount };
		userinfo.user[userinfo.user.length-1].misc += parseInt(req.body.amount);
		userinfo.user[userinfo.user.length-1].total += parseInt(req.body.amount);
		userinfo.user[userinfo.user.length-1].num++;
	}
	
	userinfo.user[userinfo.user.length-1].inputs.push(info);

	console.log(userinfo.user);
	res.redirect('/home');
}

