import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

 
class App extends Component {
	state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
	        apiKey: 'AIzaSyBRQgc6zmfI3GY8-hdWkhJX5-eGycXRvu0',
	        authDomain: 'authentication-5fa72.firebaseapp.com',
	        databaseURL: 'https://authentication-5fa72.firebaseio.com',
	        storageBucket: 'authentication-5fa72.appspot.com',
	        messagingSenderId: '265638892599'
        });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
}


	renderContent() {
		switch (this.state.loggedIn) {
			case true:
          		return <Button />;
			case false:
				return <Header headerText="banner2" />;
			default:
				return <Spinner size="large" />;
		}
	}

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
   				{this.renderContent()}
            </View>
        );
    }
}
const styles = {

    thumbnailStyle: {
        height: 50,
        width: 50
    }
};
export default App;