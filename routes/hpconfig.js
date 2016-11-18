userinfo = require('../userinfo.json');

exports.view =	function(req,	res)	{
	var	name	=	req.params.name;
		res.render('hpconfig');
}

exports.submit = function(req,res){
	console.log(userinfo.user);
	console.log("income: " + req.body.income);
	var inc = req.body.income;

	if (inc == "") {
		userinfo.user[userinfo.user.length-1].warning = 'Please enter in your income!';
		res.render('hpconfig', userinfo);
	}
	else{
		userinfo.user[userinfo.user.length-1].income = req.body.income;
		userinfo.user[userinfo.user.length-1].initial = req.body.income;
	

		var info = { "rent" : "" }; 
		if(req.body.rentamt != ""){
			console.log("rent not null");
			info = { "rent" : req.body.rentamt };
			userinfo.user[userinfo.user.length-1].rent += parseInt(req.body.rentamt);
			userinfo.user[userinfo.user.length-1].total += parseInt(req.body.rentamt);
			userinfo.user[userinfo.user.length-1].num++;
			userinfo.user[userinfo.user.length-1].income -= parseInt(req.body.rentamt);
			userinfo.user[userinfo.user.length-1].inputs.push(info);
		}
		if(req.body.utilamt != ""){
			console.log("util not null");
			info = { "util" : req.body.utilamt };
			userinfo.user[userinfo.user.length-1].util += parseInt(req.body.utilamt);
			userinfo.user[userinfo.user.length-1].total += parseInt(req.body.utilamt);
			userinfo.user[userinfo.user.length-1].num++;
			userinfo.user[userinfo.user.length-1].income -= parseInt(req.body.utilamt);
			userinfo.user[userinfo.user.length-1].inputs.push(info);
		}
		if(req.body.miscamt != ""){
			console.log("misc not null");
			info = { "misc" : req.body.miscamt };
			userinfo.user[userinfo.user.length-1].misc += parseInt(req.body.miscamt);
			userinfo.user[userinfo.user.length-1].total += parseInt(req.body.miscamt);
			userinfo.user[userinfo.user.length-1].num++;
			userinfo.user[userinfo.user.length-1].income -= parseInt(req.body.miscamt);
			userinfo.user[userinfo.user.length-1].inputs.push(info);
		}
		
		console.log(userinfo.user);
		res.redirect('/home');
	}
}

