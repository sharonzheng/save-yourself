userinfo = require('../userinfo.json');

exports.view =	function(req,	res)	{
	var	name	=	req.params.name;
	var inc = userinfo.user[userinfo.user.length-1].income;
	var init = userinfo.user[userinfo.user.length-1].initial;
	console.log("income: "+ inc + " initial: "+ init);
	if(inc < (init/4)){
    	//$.get('/login', wrongLogin);
    	console.log("hereee " );
    	res.render('input', { 'warning': 'Danger! Your pet\'s HP is extremely low'});
    }
    else{
		res.render('input', userinfo);
	}
}


exports.submit = function(req, res){
	//console.log(req.body.username);
	var info = { Rent : req.body.amount }; 
	var amt = req.body.amount;
	if(req.body.dselect === "Rent"){
		info = { "rent" : amt};
		userinfo.user[userinfo.user.length-1].rent += parseInt(req.body.amount);
		userinfo.user[userinfo.user.length-1].total += parseInt(req.body.amount);
		userinfo.user[userinfo.user.length-1].income -= parseInt(req.body.amount);
		userinfo.user[userinfo.user.length-1].coins += 500;
		userinfo.user[userinfo.user.length-1].num++;
	}
	else if(req.body.dselect === "Utilities"){
		info = { "util" : amt };
		userinfo.user[userinfo.user.length-1].util += parseInt(req.body.amount);
		userinfo.user[userinfo.user.length-1].total += parseInt(req.body.amount);
		userinfo.user[userinfo.user.length-1].income -= parseInt(req.body.amount);
		userinfo.user[userinfo.user.length-1].coins += 500;
		userinfo.user[userinfo.user.length-1].num++;
	}
	else if(req.body.dselect === "Misc"){
		info = { "misc" : amt };
		userinfo.user[userinfo.user.length-1].misc += parseInt(req.body.amount);
		userinfo.user[userinfo.user.length-1].total += parseInt(req.body.amount);
		userinfo.user[userinfo.user.length-1].income -= parseInt(req.body.amount);
		userinfo.user[userinfo.user.length-1].coins += 500;
		userinfo.user[userinfo.user.length-1].num++;
	}
	
	
	console.log("dselect: "+ req.body.dselect + " amount: " +req.body.amount);
	
	
	console.log(userinfo.user);
	// userinfo.user[userinfo.user.length-1].inputs[req.body.dselect + userinfo.user.inputs.length-1] = req.body.amount;
	userinfo.user[userinfo.user.length-1].inputs.push(info);
	console.log(userinfo.user[userinfo.user.length-1].inputs);

	var inc = userinfo.user[userinfo.user.length-1].income;
	var init = userinfo.user[userinfo.user.length-1].initial;

	if(inc < (init/4)){
    	//$.get('/login', wrongLogin);
    	console.log("hereee 2222" );
    	res.render('input', { 'warning': 'Danger! Your pet\'s HP is extremely low'});
    }
    else{
		res.render('input', { 'warning': 'Expense has been logged'});
	}
	//userinfo.user.inputs.push(info);
}



