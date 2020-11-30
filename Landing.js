import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import NextButton from './NextButton';

const Landing = (props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Mandalorian Quiz</Text>
			<Image style={styles.image} source={require('./assets/baby-yoda.png')} />
			<NextButton onPress={props.next}>Start Quiz</NextButton>
		</View>
	);
};

export default Landing;

const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
		backgroundColor: 'hsla(0, 0%, 93%, .5)',
		shadowColor: 'black',
		shadowOffset: { width: 14, height: 14 },
		shadowRadius: 7,
		shadowOpacity: 0.26,
		width: '80%',
		height: 425,
	},
	text: {
		fontSize: 35,
		marginTop: 20,
		marginHorizontal: '10%',
	},
	image: {
		width: '100%',
		height: '60%',
	}
});
