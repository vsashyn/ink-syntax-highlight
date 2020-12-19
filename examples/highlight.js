'use strict';
const React = require('react');
const {render} = require('ink');
const SyntaxHighlight = require('../build').default;

const Syntax = () => {
	return <SyntaxHighlight code="const hello = 'world'" />;
};

render(<Syntax />);
