'use strict';
const React = require('react');
const {render} = require('ink');
const SyntaxHighlight = require('../build').default;

const Syntax = () => {
	return (
		<SyntaxHighlight
			code={`
	import React, {useState, useEffect} from 'react';
	import {render, Text} from 'ink';

	const Counter = () => {
		const [counter, setCounter] = useState(0);

		useEffect(() => {
			const timer = setInterval(() => {
				setCounter(previousCounter => previousCounter + 1);
			}, 100);

			return () => {
				clearInterval(timer);
			};
		}, []);

		return <Text color="green">{counter} tests passed</Text>;
	};

	render(<Counter />);`}
		/>
	);
};

render(<Syntax />);
