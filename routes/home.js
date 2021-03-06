var data = require('../data.json');
var userinfo = require('../userinfo.json');

exports.view =	function(req,	res)	{
	var lul = { user: [
		{
		username : data.user[data.user.length-1].username,
		password : data.user[data.user.length-1].password,
		name: data.user[data.user.length-1].name,
		img1: '/images/info.png',
		dog: userinfo.user[userinfo.user.length-1].dog,
		coins: userinfo.user[userinfo.user.length-1].coins,
		hp: userinfo.user[userinfo.user.length-1].hp,
		showAlternate: false
		}]
	};

	var inc = userinfo.user[userinfo.user.length-1].income;
	var init = userinfo.user[userinfo.user.length-1].initial;
	var spent = userinfo.user[userinfo.user.length-1].total;
	if(inc <= 0){
		console.log("pic3");
		lul.user[lul.user.length-1].dog = '/images/RIP.png';
		userinfo.user[userinfo.user.length-1].dog = '/images/RIP.png';
		lul.user[lul.user.length-1].img1 = '/images/info3.png';
		userinfo.user[userinfo.user.length-1].img1 = '/images/info3.png';
		lul.user[lul.user.length-1].hp = 0;
		userinfo.user[userinfo.user.length-1].hp= 0;
	}
	else {
		console.log("pic1");
		lul.user[lul.user.length-1].hp = (inc / init) * 100;
		userinfo.user[userinfo.user.length-1].hp = (inc / init) * 100;
	userinfo.user[userinfo.user.length-1].hp = 80;
	}

	res.render('home', lul);
}
//loop thru data obj to find the name that matches the username
/*exports.submit = function(res, req){

}*/

exports.viewHome2 =	function(req,	res)	{
	var lul = { user: [
		{
		username : data.user[data.user.length-1].username,
		password : data.user[data.user.length-1].password,
		name: data.user[data.user.length-1].name,
		img1: '/images/info.png',
		dog: userinfo.user[userinfo.user.length-1].dog,
		coins: userinfo.user[userinfo.user.length-1].coins,
		hp: userinfo.user[userinfo.user.length-1].hp,
		showAlternate: true
		}]
	};

	var inc = userinfo.user[userinfo.user.length-1].income;
	var init = userinfo.user[userinfo.user.length-1].initial;
	var spent = userinfo.user[userinfo.user.length-1].total;
	if(inc <= 0){
		console.log("pic3");
		lul.user[lul.user.length-1].dog = '/images/RIP.png';
		userinfo.user[userinfo.user.length-1].dog = '/images/RIP.png';
		lul.user[lul.user.length-1].img1 = '/images/info3.png';
		userinfo.user[userinfo.user.length-1].img1 = '/images/info3.png';
		lul.user[lul.user.length-1].hp = 0;
		userinfo.user[userinfo.user.length-1].hp= 0;
	}
	else {
		console.log("pic1");
		lul.user[lul.user.length-1].hp = (inc / init) * 100;
		userinfo.user[userinfo.user.length-1].hp = (inc / init) * 100;
	userinfo.user[userinfo.user.length-1].hp = 80;
	}

	res.render('home2', lul);
}

exports.submit = function (req, res) {

	var dataFile = verifyLogin(req.body.username,req.body.password);
    
    console.log("inside ");
    console.log(userinfo.user[userinfo.user.length-1]);

    //console.log("name is "+lul.user);
    if(dataFile.length == 0){
    	//$.get('/login', wrongLogin);
    	res.render('login', { 'message': 'Wrong Login! Please try again!'});
    }
    else{
    	var dName = { user: [ 
	    	{
	    	name: dataFile,
	    	img1: userinfo.user[userinfo.user.length-1].img1,
			dog: userinfo.user[userinfo.user.length-1].dog,
			coins: userinfo.user[userinfo.user.length-1].coins
	    	}]
	    };
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

