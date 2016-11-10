exports.view =	function(req,	res)	{
	var	name	=	req.params.name;
		res.render('create');
}
exports.submit = function(req,res){
	console.log("username" + req.body.username);
}