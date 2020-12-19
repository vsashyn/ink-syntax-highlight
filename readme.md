# ink-syntax-highlight ![test](https://github.com/vadimdemedes/ink-spinner/workflows/test/badge.svg)

> Synax highlight component for [Ink](https://github.com/vadimdemedes/ink).

## Supported Languages

[All languages of highlight.js](https://highlightjs.org/static/demo/) are supported.

## Install

```
$ npm install ink-syntax-highlight
```

## Usage

```jsx
import React from 'react';
import {render, Text} from 'ink';
import SyntaxHighlight from 'ink-syntax-highlight';

render(<SyntaxHighlight code={"const a: string = 'test'"}></SyntaxHighlight>);
```

## Props

### code

Type: `string`<br>
Required<br>
Defaults: `dots`

Code represented as string.

### language

Type: `string`<br>
Optional

Set the language code explicitly. If omitted will try to auto-detect.

### theme

Type: `cli-highlight.Theme`<br>
Optional

You can write your own theme and pass it as prop. [More info regarding custom theme](https://github.com/felixfbecker/cli-highlight/blob/main/README.md#themes)
