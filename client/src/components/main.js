import './main.css';
import React, { useState } from 'react';
import One from '../components/num_input/one';
import Two from '../components/num_input/two';
import Three from '../components/num_input/three';
import Four from '../components/num_input/four';
import Five from '../components/num_input/five';

//add conditional rendering

const Main = () => {
	const [inputs, setInputs] = useState(1);

	const handleInputs = (e) => {
		setInputs(e.target.value);
	};

	return (
		<div>
			<h1>Reddit Scraper</h1>
			<label for='input'>Number of Subreddits to Scrape</label>
			<input
				type='number'
				value={inputs}
				min='1'
				max='5'
				onChange={(e) => handleInputs(e)}
			/>
			{inputs == 1 ? <One /> : <div></div>}
			{inputs == 2 ? <Two /> : <div></div>}
			{inputs == 3 ? <Three /> : <div></div>}
			{inputs == 4 ? <Four /> : <div></div>}
			{inputs == 5 ? <Five /> : <div></div>}
		</div>
	);
};

export default Main;
