import puppeteer from 'puppeteer';

const scraper1 = async (subreddit) => {
	let URL = 'https://www.reddit.com/r/' + subreddit + '/top/';
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(URL, { waitUntil: 'networkidle2' });

	let data = await page.evaluate(() => {
		let post_titles = Array.from(document.querySelectorAll('h3')).map(
			(item) => item.textContent
		);

		return post_titles;
	});

	console.log(data);

	await browser.close();

	return data;
};

const scraper2 = async (subreddit1, subreddit2) => {
	let URL1 = 'https://www.reddit.com/r/' + subreddit1 + '/top/';
	let URL2 = 'https://www.reddit.com/r/' + subreddit2 + '/top/';
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(URL1, { waitUntil: 'networkidle2' });

	let data1 = await page.evaluate(() => {
		let post_titles1 = Array.from(document.querySelectorAll('h3')).map(
			(item) => item.textContent
		);

		return post_titles1;
	});

	await page.goto(URL2, { waitUntil: 'networkidle2' });

	let data2 = await page.evaluate(() => {
		let post_titles2 = Array.from(document.querySelectorAll('h3')).map(
			(item) => item.textContent
		);

		return post_titles2;
	});

	console.log(data1);
	console.log(data2);

	dataObj = {
		data1,
		data2,
	};

	await browser.close();

	return dataObj;
};

export default scraper1;
