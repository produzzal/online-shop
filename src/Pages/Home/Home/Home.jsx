import React from 'react';
import Header from '../Header/Header';
import Cards from '../Cards/Cards';
import SliderCard from '../SliderCard/SliderCard';
import NewCard from '../Cards/NewCard/NewCard';

const Home = () => {
	return (
		<div>
			<Header></Header>
			<Cards></Cards>
			<SliderCard></SliderCard>
			<NewCard></NewCard>
		</div>
	);
};

export default Home;