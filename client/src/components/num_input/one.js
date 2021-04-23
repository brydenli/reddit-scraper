import React, { useState } from 'react';
import axios from 'axios';

const One = () => {
	const [subreddit1, setSubreddit1] = useState('');
	const [subredditName, setSubredditName] = useState([]);
	const [postList1, setPostList1] = useState([]);
	const [flag, setFlag] = useState(false);

	const handleSubreddit = (e) => {
		setSubreddit1(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const reqObj = {
			subreddit: subreddit1,
		};

		axios.post('http://localhost:3010/', reqObj).then((res) => {
			setPostList1(res.data);
		});

		setSubredditName(subreddit1);
		setFlag(true);
	};

	return (
		<div>
			<form>
				<div>
					<input
						placeholder='Subreddit Name'
						value={subreddit1}
						onChange={handleSubreddit}
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
								<th>Top Posts from {subredditName}</th>
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
				</div>
			) : (
				<div></div>
			)}
		</div>
	);
};

export default One;
