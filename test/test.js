import React from 'react';
import {render} from 'ink-testing-library';
import test from 'ava';
import SyntaxHighlight from '..';

test('render code as in snapshot', t => {
	const {frames} = render(
		<SyntaxHighlight code="const hello: string = 'world'" />
	);
	t.snapshot(frames);
});
