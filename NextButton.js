import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NextButton = (props) => {
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
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 50,
        marginHorizontal: '20%',
        alignItems: 'center',
        borderRadius: 7
    },
    buttonText: {
        color: 'black',
        fontSize: 17,
        fontFamily: 'orbitron',
    }
});

export default NextButton;
