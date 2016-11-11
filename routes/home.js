var data = require('../data.json');
var userinfo = require('../userinfo.json');

exports.view =	function(req,	res)	{
	var lul = { user: [
		{
		username : data.user[data.user.length-1].username,
		password : data.user[data.user.length-1].password,
		name: data.user[data.user.length-1].name
		}]
	};
	console.log("made ittttt");
	console.log(userinfo.user[userinfo.user.length-1].username);
	res.render('home', lul);
}
//loop thru data obj to find the name that matches the username
/*exports.submit = function(res, req){

}*/

exports.submit = function (req, res) {

	var dataFile = verifyLogin(req.body.username,req.body.password);
    var dName = { user: [{name: dataFile}]};

    //console.log("name is "+lul.user);
    if(dataFile.length == 0){
    	//$.get('/login', wrongLogin);
    	res.render('login', { 'message': 'Wrong Login! Please try again!'});
    }
    else{
		res.render('home', dName);
	}
}

function verifyLogin(username, password){
	for(var i = 0; i < data.user.length; i++){
		if(data.user[i].username == username){
			if(data.user[i].password == password){
				userinfo.user.push(data.user[i]);
				return data.user[i].name;
			}
		}
	}
	return "";
}

function wrongLogin(result){
	var message = 
	'<p>Wrong username/password. Please try again!</p>';
	$('#wronglogin').html(message);
}