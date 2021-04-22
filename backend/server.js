import scraper from './scraper.js';
import express from 'express';
import cors from 'cors';
const app = express();
const port = 3010;

app.use(cors());
app.use(express.json());

app.post('/', (req, res) => {
	try {
		scraper(req.body.subreddit).then((response) => {
			res.status(200).json(response);
		});
	} catch (err) {
		res.status(400).json(err);
	}
});

app.post('/two', (req, res) => {
	let resObj = {};
	let postlist1 = [];
	let postlist2 = [];
	try {
		scraper(req.body.subreddit1)
			.then((response) => {
				postlist1 = response;
			})
			.then(() => {
				scraper(req.body.subreddit2).then((response) => {
					postlist2 = response;
				});
			})
			.then(() => {
				resObj = {
					postlist1,
					postlist2,
				};
				res.status(200).json(resObj);
			});
	} catch (err) {
		res.status(400).json(err);
	}
});

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
