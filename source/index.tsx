import * as React from 'react';
import {Text} from 'ink';
import {highlight} from 'cli-highlight';

/**
 * SyntaxHighlight.
 */
const SyntaxHighlight: React.FC = ({children}) => {
	if (typeof children === 'string') {
		return <Text>{highlight(children)}</Text>;
	}
	return null;
};

export default SyntaxHighlight;
