import React from 'react';
import { View } from 'react-native';

//exists to look nice and wrap some other existing components as well (CardSection)

//renders text tag from AlbumDetail
const Card = (props) => {
	return (
		<View style={styles.containerStyle}>
			{props.children} 
		</View>
	);
};

const styles = {
	containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd', //light grey
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2},
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10

	}
};

export { Card };