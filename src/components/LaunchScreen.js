import React from 'react';
import { View, Keyboard } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { querryUserData } from './User';
import * as firebase from 'firebase';

class LaunchScreen extends React.Component {

    componentWillMount() {
        //this checks for user data stored in realm
        querryUserData().then((userDataArray) => {
            let userDatum = userDataArray[0];  
            let userName = userDatum.username;
            let userPassword = userDatum.password; 
            this.tryFirebase(userName, userPassword);
        }).catch((error) => {
            Actions.home();
            // alert(error.message);
        })
    }

    //checks firebase, currently will sign in the user, but the user data will still be null for some reason
    tryFirebase = (username, password) => {
        firebase.auth().signInWithEmailAndPassword(username, password)
        .then(() => {
            var user = firebase.auth().currentUser;
            Keyboard.dismiss();
            Actions.messages({
                person: user
            });
        })
        .catch(function (error) {
            var errorMessage = error.message;
            alert(errorMessage);
        });
        // var user = firebase.auth().currentUser;
        // if (user != null) {
        //     Keyboard.dismiss();
        //     Actions.messages({
        //         person: user
        //     });
        // } else {
        //     //goes to the home(login) page if no user is detected 
        //     // Actions.home();
        //     // alert("couldn't sign you in for some reason!");
        // }
    }

    render() {
        return (
            <View />
        );
    }
}

export default LaunchScreen;