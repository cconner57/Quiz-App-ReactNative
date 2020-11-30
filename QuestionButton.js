import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const QuestionButton = (props) => {
	return (
		<TouchableOpacity onPress={props.onPress}>
			<View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
		</TouchableOpacity>
	);
};


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#3eadcf',
        paddingVertical: 12,
        paddingHorizontal: 10,
        marginVertical: 8,
        alignItems: 'center',
        borderRadius: 7,
        borderWidth: 3,
        borderColor: '#abe9cd',
        width: 200,

    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'orbitron',
    }
});

export default QuestionButton;
