import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
const app = express();
const port = 3005;
app.use(cors());
const endPoint = encodeURIComponent(
	'https://api.preciodelaluz.org/v1/prices/all?zone=PCB'
);
async function getData() {
	try {
		const data = await fetch(
			`https://api.allorigins.win/get?url=${endPoint}`
		);
		const { contents } = await data.json();
		return JSON.parse(contents);
	} catch (error) {
		console.log('ERROR');
	}
}

// GET: All Data
app.get('/api', (req, res) => {
	getData().then((data) => {
		res.json(data);
	});
});

app.listen(port, () => {
	console.log('Server exposed in ' + `http://localhost:${port}/api`);
});
