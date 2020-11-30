import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';

import Landing from './Landing';
import Question from './Question';
import Result from './Result';
import QuizData from './QuizInfo.json';

Font.loadAsync({
	'orbitron': require('./assets/fonts/Orbitron-VariableFont_wght.ttf'),
	'orbitron-bold': require('./assets/fonts/Orbitron-Bold.ttf'),
});

export default function App() {
	const [step, setStep] = useState(0);
	const [question, setQuestion] = useState(0);
	const [correct, setCorrect] = useState(0);
	const [selected, setSelected] = useState('');
	const [answer, setAnswer] = useState('');

	const selectedChoice = (e) => {
		setSelected(e);
		setAnswer(QuizData[question].Answer);
		score();
		next();
	};

	const score = () => {
		if (selected === answer) {
			setCorrect(correct + 1);
		}
	};

	const next = () => {
		if (step === 0) {
			setStep(step + 1);
		} else if (question === 4) {
			setStep(step + 1);
		} else {
			setQuestion(question + 1);
		}
	};

	const tryAgain = () => {
		setStep(0);
		setQuestion(0);
		setCorrect(0);
		setSelected('');
		setAnswer('');
	};

	return (
		<View style={styles.container}>
			<LinearGradient
				colors={['#abe9cd', '#3eadcf']}
				style={{
					position: 'absolute',
					left: 0,
					right: 0,
					top: 0,
					height: 900,
				}}
			/>
			{step === 0 && <Landing next={next} />}
			{step === 1 && (
				<Question
					question={QuizData[question].Question}
					choices={QuizData[question].Choices}
					selectedChoice={selectedChoice}
				/>
			)}
			{step === 2 && <Result results={correct} tryAgain={tryAgain} />}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

