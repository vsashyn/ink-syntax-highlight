import * as React from 'react';
import {Text} from 'ink';
import {highlight, Theme} from 'cli-highlight';

export interface Props {
	readonly code: string;
	readonly language?: string;
	readonly theme?: Theme;
}
/**
 * SyntaxHighlight.
 */
const SyntaxHighlight: React.FC<Props> = ({code, language, theme}) => {
	const highlightedCode = React.useMemo(() => {
		return highlight(code, {language, theme});
	}, [code, language, theme]);

	return <Text>{highlightedCode}</Text>;
};

export default SyntaxHighlight;
