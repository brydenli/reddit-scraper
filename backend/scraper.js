import puppeteer from 'puppeteer';

const scraper = async (subreddit) => {
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

export default scraper;
