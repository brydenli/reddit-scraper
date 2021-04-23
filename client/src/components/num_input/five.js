import React, { useState } from 'react';
import axios from 'axios';

const Five = () => {
	const [subreddit1, setSubreddit1] = useState('');
	const [subreddit2, setSubreddit2] = useState('');
	const [subreddit3, setSubreddit3] = useState('');
	const [subreddit4, setSubreddit4] = useState('');
	const [subreddit5, setSubreddit5] = useState('');
	const [subredditName, setSubredditName] = useState([]);
	const [postList1, setPostList1] = useState([]);
	const [postList2, setPostList2] = useState([]);
	const [postList3, setPostList3] = useState([]);
	const [postList4, setPostList4] = useState([]);
	const [postList5, setPostList5] = useState([]);
	const [flag, setFlag] = useState(false);

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

	const handleSubreddit5 = (e) => {
		setSubreddit5(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const reqObj1 = {
			subreddit: subreddit1,
		};

		const reqObj2 = {
			subreddit: subreddit2,
		};

		const reqObj3 = {
			subreddit: subreddit3,
		};

		const reqObj4 = {
			subreddit: subreddit4,
		};

		const reqObj5 = {
			subreddit: subreddit5,
		};

		axios.post('http://localhost:3010/', reqObj1).then((res) => {
			console.log(res);
			setPostList1(res.data);
		});

		axios.post('http://localhost:3010/', reqObj2).then((res) => {
			console.log(res);
			setPostList2(res.data);
		});

		axios.post('http://localhost:3010/', reqObj3).then((res) => {
			console.log(res);
			setPostList3(res.data);
		});

		axios.post('http://localhost:3010/', reqObj4).then((res) => {
			console.log(res);
			setPostList4(res.data);
		});

		axios.post('http://localhost:3010/', reqObj5).then((res) => {
			console.log(res);
			setPostList5(res.data);
		});

		setSubredditName([
			subreddit1,
			subreddit2,
			subreddit3,
			subreddit4,
			subreddit5,
		]);

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
					<input
						placeholder='Subreddit Name'
						value={subreddit5}
						onChange={handleSubreddit5}
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
					<div>
						<table>
							<theader>
								<th>Top Posts from {subredditName[4]}</th>
							</theader>
							<tbody>
								{postList5 &&
									postList5.map((post) => {
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

export default Five;
