var data = require('../data.json');

exports.view =	function(req,	res)	{
	var lul = { user: [
		{
		username : data.user[data.user.length-1].username,
		password : data.user[data.user.length-1].password,
		name: data.user[data.user.length-1].name
	}]
};
		res.render('home', lul);
		console.log(data.user[data.user.length-1].name);
}
//loop thru data obj to find the name that matches the username
