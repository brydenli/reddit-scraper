import './main.css';
import React, { useState } from 'react';
import axios from 'axios';

const Main = () => {
	const [inputs, setInputs] = useState(1);
	const [subreddit, setSubreddit] = useState('');
	const [subredditName, setSubredditName] = useState('');
	const [postList, setPostList] = useState([]);

	const handleSubreddit = (e) => {
		setSubreddit(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const reqObj = {
			subreddit: subreddit,
		};

		axios.post('http://localhost:3010/', reqObj).then((res) => {
			setPostList(res.data);
		});

		setSubredditName(subreddit);
	};

	return (
		<div>
			<h1>Reddit Scraper</h1>
			<div>
				<form>
					<div>
						<input
							placeholder='Subreddit Name'
							value={subreddit}
							onChange={handleSubreddit}
						/>
					</div>
					<div>
						<button type='submit' onClick={handleSubmit}>
							Submit
						</button>
					</div>
				</form>
				<div>
					<table>
						<theader>
							<th>Top Posts from {subreddit}</th>
						</theader>
						<tbody>
							{postList &&
								postList.map((post) => {
									return (
										<tr>
											<td>{post}</td>
										</tr>
									);
								})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Main;
