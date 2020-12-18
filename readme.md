# ink-syntax-highlight ![test](https://github.com/vadimdemedes/ink-spinner/workflows/test/badge.svg)

> Synax highlight component for [Ink](https://github.com/vadimdemedes/ink).

Looking for a version compatible with Ink 2.x? Check out [this release](https://github.com/vadimdemedes/ink-spinner/tree/v3.1.0).

## Install

```
$ npm install ink-syntax-highlight
```

## Usage

```jsx
import React from 'react';
import { render, Text } from 'ink';
import SyntaxHighlight from 'ink-syntax-highlight';

render(
	<Text>
		<Text color="green">
			<Spinner type="dots" />
		</Text>
		{' Loading'}
	</Text>
);
```
