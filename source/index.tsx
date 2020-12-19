import * as React from 'react';
import {Text} from 'ink';
import {highlight, Theme} from 'cli-highlight';

export interface Props {
	code: string;
	language?: string;
	theme?: Theme;
}
/**
 * SyntaxHighlight.
 */
const SyntaxHighlight: React.FC<Props> = ({code, language, theme}) => {
	return <Text>{highlight(code, {language, theme})}</Text>;
};

export default SyntaxHighlight;
