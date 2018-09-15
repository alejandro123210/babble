import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Keyboard, Clipboard, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { deleteAllData, querryUserData } from './User';
import * as firebase from 'firebase';

class MyProfile extends React.Component {

    logout = () => {
        firebase.auth().signOut().then(function() {
            Actions.home();
          }).catch(function(error) {
            alert("there was an error signing you out!");
          });
        deleteAllData().then().catch(error => {
            alert('couldnt delete your data!' + error);
        });
        //Actions.home();
    }

    getLink = () => {
        Clipboard.setString('hello world');
        this.setState({ accountLinkText: 'copied!' });
        alert(this.state.id);
    }

    state = {
        accountLinkText: 'get account link',
        id: ''
    }

    render() {
        return (
            <View style={styles.outerContainer}>
                <View style={styles.profilePicContainer}>
                    <Image
                        style={styles.profilePic}
                        source={{ uri: this.props.profilePicURL }}
                    />
                </View>
                <Text style={styles.nameText}>
                    Alejandro Gonzalez
                </Text>
                <Text style={styles.detailText}>
                    myname123210@gmail.com
                </Text>
                <TouchableOpacity onPress={this.getLink}>
                    <Text style={styles.detailText}>
                        {this.state.accountLinkText}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.logout}>
                    <Text style={styles.logoutButton}>
                        logout
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    outerContainer: {
        alignItems: 'center',
    },
    profilePicContainer: {
        marginTop: 50,
        height: 250,
        width: 250,
        borderRadius: 10000
    },
    profilePic: {
        height: 250,
        width: 250,
        borderRadius: 1000000
    },
    nameText: {
        paddingTop: 60
    },
    detailText: {
        paddingTop: 45,
    },
    logoutButton: {
        paddingTop: 45,
        color: 'red'
    }
})

export default MyProfile;