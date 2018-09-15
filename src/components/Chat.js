import React from 'react';
import { GiftedChat, Message } from 'react-native-gifted-chat';
import { Actions } from 'react-native-router-flux';

class Home extends React.Component {
    state = {
        messages: [],
        username: this.props.username,
        password: this.props.password,
        sentMessage: '',
    };

    
    onSend(messages = []) {
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, messages),
            };
        });
    }

    //this is the method that's called before the component renders, and it's basically just the thing that sets the text for the messages
    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 0,
                    text: this.props.lastMessage,
                    createdAt: new Date(),
                    user: {
                        _id: 0,
                        name: 'React Native',
                        avatar: this.props.profilePic,
                    },
                },
            ],
        })
    }

    //renders the chat
    render() {
        return (
            //this is a custom component that I got off github, it's the chat screen UI
            <GiftedChat
                renderAvatar={null}
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        );
    }
}


export default Home;