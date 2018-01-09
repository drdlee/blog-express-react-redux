const app = require('express')(),
	PORT = process.env.PORT || 2555;

app.get('/', (req, res) => {
	res.send('Hi');
});

app.listen(PORT, () => {
	console.log('Server started: localhost://2555');
});
