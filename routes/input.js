userinfo = require('../userinfo.json');

exports.view =	function(req,	res)	{
	var	name	=	req.params.name;
		res.render('input');
}

exports.submit = function(req, res){
	//console.log(req.body.username);
	var info = { Rent : req.body.amount }; 
	if(req.body.dselect === "Utilities"){
		info = { Utilities : req.body.amount };
	}else if(req.body.dselect === "Misc"){
		info = { Misc : req.body.amount };
	}
	
	
	console.log("dselect: "+ req.body.dselect + " amount: " +req.body.amount);
	
	
	console.log(userinfo.user);
	// userinfo.user[userinfo.user.length-1].inputs[req.body.dselect + userinfo.user.inputs.length-1] = req.body.amount;
	userinfo.user[userinfo.user.length-1].inputs.push(info);
	console.log(userinfo.user[userinfo.user.length-1].inputs);


	//userinfo.user.inputs.push(info);
	res.render('input');
}