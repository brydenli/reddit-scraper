import React, { useState } from 'react';
import axios from 'axios';

const Two = () => {
	const [subreddit1, setSubreddit1] = useState('');
	const [subreddit2, setSubreddit2] = useState('');
	const [subredditName, setSubredditName] = useState([]);
	const [postList1, setPostList1] = useState([]);
	const [postList2, setPostList2] = useState([]);
	const [flag, setFlag] = useState(false);

	const handleSubreddit1 = (e) => {
		setSubreddit1(e.target.value);
	};

	const handleSubreddit2 = (e) => {
		setSubreddit2(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const reqObj1 = {
			subreddit: subreddit1,
		};

		const reqObj2 = {
			subreddit: subreddit2,
		};

		axios.post('http://localhost:3010/', reqObj1).then((res) => {
			console.log(res);
			setPostList1(res.data);
		});

		axios.post('http://localhost:3010/', reqObj2).then((res) => {
			console.log(res);
			setPostList2(res.data);
		});

		setSubredditName([subreddit1, subreddit2]);
		setFlag(true);
	};

	return (
		<div>
			<form>
				<div>
					<input
						placeholder='Subreddit Name'
						value={subreddit1}
						onChange={handleSubreddit1}
					/>
				</div>
				<div>
					<input
						placeholder='Subreddit Name'
						value={subreddit2}
						onChange={handleSubreddit2}
					/>
				</div>
				<div>
					<button type='submit' onClick={handleSubmit}>
						Submit
					</button>
				</div>
			</form>
			{flag ? (
				<div>
					<div>
						<table>
							<theader>
								<th>Top Posts from {subredditName[0]}</th>
							</theader>
							<tbody>
								{postList1 &&
									postList1.map((post) => {
										return (
											<tr>
												<td>{post}</td>
											</tr>
										);
									})}
							</tbody>
						</table>
					</div>
					<div>
						<table>
							<theader>
								<th>Top Posts from {subredditName[1]}</th>
							</theader>
							<tbody>
								{postList2 &&
									postList2.map((post) => {
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
			) : (
				<div></div>
			)}
		</div>
	);
};

export default Two;
