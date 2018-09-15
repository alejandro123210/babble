import React from 'react';
import { View, Text, StyleSheet, TextInput, Keyboard, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { insertUserData } from './User';
import * as firebase from 'firebase';

class EmailLogin extends React.Component {

    state = {
        //the username and password entered
        thisUsername: "",
        thisPassword: "",
        loading: true
    };

    login = () => {
        //signs someone in with the username and password entered
        firebase.auth().signInWithEmailAndPassword(this.state.thisUsername, this.state.thisPassword)
            .then(() => {
                const userInfo = {
                    id: 1,
                    name: "placeholder",
                    username: this.state.thisUsername,
                    password: this.state.thisPassword
                }
                //adds the user info to realm saved locally on phone
                insertUserData(userInfo).then().catch((error) => {
                    alert("we couldn't save your data for some reason!");
                });
                Keyboard.dismiss();
                //goes to the messages screen
                var user = firebase.auth().currentUser;
                Actions.messages({
                    person: user
                });
            })
            .catch(function (error) {
                var errorMessage = error.message;
                alert(errorMessage);
            });  
        //checks if firebase detected a user
        // if (user != null) {

        // } else {

        // }

    }

    //takes the user to a create account screen
    createUserAccount = () => {
        Actions.createAccount();
    }

    //lets the text boxes auto focus after enter is hit
    constructor(props) {
        super(props);
        this.focusNextField = this.focusNextField.bind(this);
        // to store our input refs
        this.inputs = {};
    }
    focusNextField(key) {
        this.inputs[key].focus();
    }

    //renders the view
    render() {
        return (
            <View>
                <TextInput
                    autoFocus={true}
                    style={styles.name}
                    placeholder='username'
                    onChangeText={(text) => {
                        this.setState({
                            thisUsername: text,
                        });
                    }}
                    value={this.state.thisUsername}
                    ref={input => {
                        this.inputs['1'] = input;
                    }}
                    blurOnSubmit={false}
                    onSubmitEditing={() => {
                        // specify the key of the ref, as done in the previous section.
                        this.focusNextField('2');
                    }}
                />
                <TextInput
                    style={styles.name}
                    secureTextEntry={true}
                    placeholder='password'
                    onChangeText={(text) => {
                        this.setState({
                            thisPassword: text,
                        });
                    }}
                    value={this.state.thisPassword}
                    ref={input => {
                        this.inputs['2'] = input;
                    }}
                    blurOnSubmit={false}
                    onSubmitEditing={this.login}
                />
                <View style={styles.orText}>
                    <Text>
                        or
                    </Text>
                    <TouchableOpacity onPress={this.createUserAccount}>
                        <Text style={styles.createAccount}>
                            create account!
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

//styles for the text boxes
const styles = StyleSheet.create({
    name: {
        marginTop: 40,
        height: 35,
        marginLeft: 10,
        marginRight: 10,

    },
    orText: {
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    createAccount: {
        paddingTop: 10,
        fontWeight: 'bold',
        fontSize: 15,
    }
});

export default EmailLogin;