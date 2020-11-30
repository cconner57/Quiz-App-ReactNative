import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import QuestionButton from './QuestionButton'

const Question = (props) => {
	return (
		<View style={styles.container}>
			<View className='Container__question'>
				<Text style={styles.question}>{props.question}</Text>
			</View>
			<View style={styles.container__choices}>
				{props.choices.map((choice, index) => (
					<QuestionButton key={index} onPress={() => props.selectedChoice(choice)}>{choice}</QuestionButton>
				))}
			</View>
		</View>
	);
};

export default Question;

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
	},
	question: {
		textAlign: 'center',
		fontSize: 16,
		fontWeight: 'bold',
		marginVertical: 25,
		fontFamily: 'orbitron-bold',
	},
	container__choices: {
		width: 350,
		alignItems: 'center'
	}
});
