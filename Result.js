import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import NextButton from './NextButton'

const Result = (props) => {
	return (
		<View style={styles.container}>
			{props.results > 0 ? (
				<Text style={styles.score}>You got {props.results} correct!</Text>
			) : (
				<Text style={styles.score}>Try Again</Text>
			)}
			<NextButton onPress={props.tryAgain}>Play Again</NextButton>
		</View>
	);
};

export default Result;

const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
		backgroundColor: 'hsl(0, 0%, 93%)',
		shadowColor: 'black',
		shadowOffset: { width: 14, height: 14 },
		shadowRadius: 7,
		shadowOpacity: 0.26,
		width: 350,
		height: 400,
		justifyContent: 'space-around'
	},
	score: {
		textAlign: 'center',
		marginVertical: 20,
		fontSize: 20,
		fontFamily: 'orbitron',
	}
});
