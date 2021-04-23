import scraper1 from './scraper.js';
import express from 'express';
import cors from 'cors';
const app = express();
const port = 3010;

app.use(cors());
app.use(express.json());

app.post('/', (req, res) => {
	try {
		scraper1(req.body.subreddit).then((response) => {
			res.status(200).json(response);
		});
	} catch (err) {
		res.status(400).json(err);
	}
});

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
