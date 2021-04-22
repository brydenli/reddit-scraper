import React, { useState } from 'react';
import axios from 'axios';

const Four = () => {
	const [subreddit1, setSubreddit1] = useState('');
	const [subreddit2, setSubreddit2] = useState('');
	const [subreddit3, setSubreddit3] = useState('');
	const [subreddit4, setSubreddit4] = useState('');
	const [subredditName, setSubredditName] = useState([]);
	const [postList1, setPostList1] = useState([]);
	const [postList2, setPostList2] = useState([]);
	const [postList3, setPostList3] = useState([]);
	const [postList4, setPostList4] = useState([]);

	const handleSubreddit1 = (e) => {
		setSubreddit1(e.target.value);
	};

	const handleSubreddit2 = (e) => {
		setSubreddit2(e.target.value);
	};

	const handleSubreddit3 = (e) => {
		setSubreddit3(e.target.value);
	};

	const handleSubreddit4 = (e) => {
		setSubreddit4(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const reqObj = {
			subreddit: subreddit1,
		};

		axios.post('http://localhost:3010/', reqObj).then((res) => {
			setPostList1(res.data);
		});

		// setSubredditName(subreddit);
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
					<input
						placeholder='Subreddit Name'
						value={subreddit3}
						onChange={handleSubreddit3}
					/>
				</div>
				<div>
					<input
						placeholder='Subreddit Name'
						value={subreddit4}
						onChange={handleSubreddit4}
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
			<div>
				<table>
					<theader>
						<th>Top Posts from {subredditName[2]}</th>
					</theader>
					<tbody>
						{postList3 &&
							postList3.map((post) => {
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
						<th>Top Posts from {subredditName[3]}</th>
					</theader>
					<tbody>
						{postList4 &&
							postList4.map((post) => {
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
	);
};

export default Four;
