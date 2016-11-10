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
}
//loop thru data obj to find the name that matches the username
/*exports.submit = function(res, req){

}*/

exports.submit = function (req, res) {

	var dataFile = verifyLogin(req.body.username,req.body.password);
    var lul = { user: [{name: dataFile}]};

    console.log("name is "+lul.user);
	res.render('home', lul);
}

function verifyLogin(username, password){
	for(var i = 0; i < data.user.length; i++){
		console.log(data.user.length + "\n");
		console.log(data.user[i].username+ "\n");
		console.log(data.user[i].password+ "\n");
		if(data.user[i].username == username){
			if(data.user[i].password == password){
				return data.user[i].name;
			}
		}
	}
	return "";
}