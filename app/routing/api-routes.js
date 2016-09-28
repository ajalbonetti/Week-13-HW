
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/api/friends', function (req, res) {
	res.json(friends);
});

app.post('/api/friends', function (req, res) {
	var newFriend = req.body;
	newFriend.routeName = newFriend.name.replace(/\s+/g, '').toLowerCase();

	console.log(newFriend);

	friends.push(newFriend);

	res.json(newFriend);
});

