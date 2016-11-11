userinfo = require('../userinfo.json');

exports.view =	function(req,	res)	{
	var	name	=	req.params.name;
		res.render('hpconfig');
}

exports.submit = function(req,res){
	console.log(userinfo.user);
	console.log("income: " + req.body.income);
	userinfo.user[userinfo.user.length-1].income = req.body.income;

	var info = { Rent : req.body.amount }; 
	if(req.body.dselect === "Utilities"){
		info = { Utilities : req.body.amount };
	}else if(req.body.dselect === "Misc"){
		info = { Misc : req.body.amount };
	}
	userinfo.user[userinfo.user.length-1].inputs.push(info);

	console.log(userinfo.user);
	res.redirect('/home');
}

