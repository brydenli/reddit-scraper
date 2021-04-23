import express from 'express';
import scraper1 from '../scraper.js';
import scraper2 from '../scraper.js';
const router = express.Router();

router.route('/').post((req, res) => {
	try {
		scraper1(req.body.subreddit).then((response) => {
			res.status(200).json(response);
		});
	} catch (err) {
		res.status(400).json(err);
	}
});

router.route('/two').post((req, res) => {
	let resObj = {};
	let postlist1 = [];
	let postlist2 = [];
	try {
		scraper2(req.body.subreddit1).then((response) => {
			console.log(response);
			postlist1 = response.data1;
			postlist2 = response.data2;
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

export default router;
