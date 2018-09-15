import React from 'react';
import Home from './components/Home';
import Chat from './components/Chat';
import Messages from './components/Messages';
import EmailLogin from './components/EmailLogin';
import CreateAccount from './components/CreateAccount';
import MyProfile from './components/MyProfile';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import LaunchScreen from './components/LaunchScreen';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Realm from 'realm';
import firebase from 'firebase';


class App extends React.Component {

  state = {
    //ust a place holder profile pic 
    profilePicURL: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350'
  }

  componentWillMount(){
    //configures firebase and initalizes the app for firebase
    const firebaseConfig = {
        apiKey: 'AIzaSyCnDtQP48RJMQ6s4xDsHSRlFxEGPEDAua0',
        authDomain: 'babble-d2d10.firebaseapp.com',
    }
    firebase.initializeApp(firebaseConfig);
}

  //this is all the different scenes in the app
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene 
          key='launchScreen'
          component={LaunchScreen}
          hideNavBar={true}
          />
          <Scene
            key='home'
            component={Home}
            title='welcome!'
            hideNavBar={true}

          />
          <Scene
            key='messages'
            component={Messages}
            title='messages'
            renderBackButton={null}
            renderLeftButton={() =>
              <Text></Text>
              //we put this here just to keep the title in the middle
            }
            titleStyle={{ alignSelf: 'center' }}
            renderRightButton={() =>
              <TouchableOpacity
                style={styles.profileButton}
                onPress={() => {
                  Actions.myProfile({
                    profilePicURL: this.state.profilePicURL
                  });
                }}>
                <Image
                  style={{ height: 30, width: 30, borderRadius: 1000 }}
                  source={{ uri: this.state.profilePicURL }}
                />
              </TouchableOpacity>
            }
          />
          <Scene
            key='chat'
            component={Chat}
            renderRightButton={() => {
              <View />
            }}
            titleStyle = {{alignSelf: 'center'}}
            
          />
          <Scene
            key='login'
            component={EmailLogin}
            title='login'
          />
          <Scene
            key='createAccount'
            component={CreateAccount}
            title='create'
          />
          <Scene
            key='myProfile'
            component={MyProfile}
            title='my profile'
          />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  profileButton: {
    marginRight: 10,
    height: 30,
    width: 30,
    borderRadius: 100000,
  }
})


export default App;