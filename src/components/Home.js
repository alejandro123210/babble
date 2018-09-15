import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, Keyboard } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { querryUserData } from './User'

class Home extends React.Component {

    state = {
        thisUsername: "",
        thisPassword: "",
    };

    doFacebook = () => {
        //auto logs in with facebook (not set up)
        Actions.messages({
            username: this.state.thisUsername,
            password: this.state.thisPassword,
        });
    }

    doGoogle = () => {
        //auto logs in with google (not set up)
        Actions.messages({
            username: this.state.thisUsername,
            password: this.state.thisPassword,
        });
    }

    doEmail = () => {
        //takes user to the email login page
        Actions.login();
    }

    //renders the screen
    render() {
        return (
            <View style={{ backgroundColor: 'white' }}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>
                        babble
                    </Text>
                </View>
                <View style={styles.button}>
                    <Button title='use facebook' onPress={this.doFacebook} />
                    <View style={styles.buttonSpacing}>
                        <Button title='use google' onPress={this.doGoogle} />
                    </View>
                    <Button title='use email' onPress={this.doEmail} />
                </View>
                <View style={{ backgroundColor: 'white', height: '100%' }}>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    titleView: {
        marginTop: 50,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 80,
    },
    button: {
        paddingTop: 50,
    },
    buttonSpacing: {
        paddingTop: 20,
        paddingBottom: 20,
    },
});


export default Home;