import React from 'react';
import { View, Text, StyleSheet, TextInput, Keyboard, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';

class CreateAccount extends React.Component {

    state = {
        //all the data entered
        thisName: '',
        thisEmail: '',
        thisPassword: '',
        thisConfirmPassword: ''
    }

    //auto focus of next text inputs
    constructor(props) {
        super(props);
        this.focusNextField = this.focusNextField.bind(this);
        this.inputs = {};
    }
    focusNextField(key) {
        this.inputs[key].focus();
    }

    //renders everything
    render() {
        return (
            <View>
                <TextInput
                    autoFocus={true}
                    style={styles.name}
                    placeholder='name'
                    onChangeText={(text) => {
                        this.setState({
                            thisName: text,
                        });
                    }}
                    value={this.state.thisName}
                    blurOnSubmit={false}
                    onSubmitEditing={() => {
                        // specify the key of the ref, as done in the previous section.
                        this.focusNextField('email');
                    }}
                />
                <TextInput
                    style={styles.name}
                    placeholder='email'
                    onChangeText={(text) => {
                        this.setState({
                            thisEmail: text,
                        });
                    }}
                    value={this.state.thisEmail}
                    ref={input => {
                        this.inputs['email'] = input;
                    }}
                    blurOnSubmit={false}
                    onSubmitEditing={() => {
                        // specify the key of the ref, as done in the previous section.
                        this.focusNextField('password');
                    }}
                />
                <TextInput
                    secureTextEntry={true}
                    style={styles.name}
                    placeholder='password'
                    onChangeText={(text) => {
                        this.setState({
                            thisPassword: text,
                        });
                    }}
                    value={this.state.thisPassword}
                    ref={input => {
                        this.inputs['password'] = input;
                    }}
                    blurOnSubmit={false}
                    onSubmitEditing={() => {
                        // specify the key of the ref, as done in the previous section.
                        this.focusNextField('confirm');
                    }}
                />
                <TextInput
                    secureTextEntry={true}
                    style={styles.name}
                    placeholder='confirm'
                    onChangeText={(text) => {
                        this.setState({
                            thisConfirmPassword: text,
                        });
                    }}
                    value={this.state.thisConfirmPassword}
                    ref={input => {
                        this.inputs['confirm'] = input;
                    }}
                    blurOnSubmit={false}
                    onSubmitEditing={() => {
                        if (this.state.thisPassword === this.state.thisConfirmPassword){
                            firebase.auth().createUserWithEmailAndPassword(this.state.thisEmail, this.state.thisPassword).catch(function(error) {
                                var errorMessage = error.message;
                                alert(errorMessage);
                            });
                            Actions.messages();
                            Keyboard.dismiss();
                        } else {
                            alert("Whoops! make sure your passwords match!")
                        }
                    }}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    name: {
        marginTop: 30,
        height: 45,
        marginLeft: 10,
        marginRight: 10,
    },
});


export default CreateAccount;