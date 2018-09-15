import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import TableCell from './TableCell';

class Messages extends React.Component {
    state = {
        //all the firebase data for contacts and messages will go here for now it's just placeholders
        contacts: [
            {
                key: 1,
                name: 'Terry',
                lastMessage: 'Rooms oh fully taken by worse do. Points afraid but may end law lasted. Was out laughter raptures returned outweigh. Luckily cheered colonel me do we attacks on highest enabled. Tried law yet style child. Bore of true of no be deal. Frequently sufficient in be unaffected. The furnished she concluded depending procuring concealed.',
                lastMessageTime: '03/28/1999',
                image: 'https://timedotcom.files.wordpress.com/2017/12/terry-crews-person-of-year-2017-time-magazine-facebook-1.jpg?quality=85'
            },
            {
                key: 2,
                name: 'Beth',
                lastMessage: 'Use securing confined his shutters. Delightful as he it acceptance an solicitude discretion reasonably. Carriage we husbands advanced an perceive greatest. Totally dearest expense on demesne ye he. Curiosity excellent commanded in me. Unpleasing impression themselves to at assistance acceptance my or. On consider laughter civility offended oh.',
                lastMessageTime: 'a week ago',
                image: 'https://media1.popsugar-assets.com/files/thumbor/f6mR3MTC66MfnZFc0qGrgcnZ_fg/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/12/19/048/n/1922441/tmp_f17bIy_7aef35b1ab387138_k.jpg'
            },
            {
                key: 3,
                name: 'Donald',
                lastMessage: 'I got a dog!',
                lastMessageTime: 'Yesterday',
                image: 'https://amp.businessinsider.com/images/5ae612b819ee8623008b463b-750-500.jpg'
            },
            {
                key: 4,
                name: 'Sarah',
                lastMessage: 'Fat son how smiling mrs natural expense anxious friends. Boy scale enjoy ask abode fanny being son. As material in learning subjects so improved feelings. Uncommonly compliment imprudence travelling insensible up ye insipidity',
                lastMessageTime: '2 days ago',
                image: 'https://i2.wp.com/www.usmagazine.com/wp-content/uploads/2017/12/person-of-year-2017-time-magazine-cover-zoom1.jpg?crop=641px%2C395px%2C312px%2C312px&resize=800%2C800&ssl=1'
            },
            {
                key: 1,
                name: 'Terry',
                lastMessage: 'Rooms oh fully taken by worse do. Points afraid but may end law lasted. Was out laughter raptures returned outweigh. Luckily cheered colonel me do we attacks on highest enabled. Tried law yet style child. Bore of true of no be deal. Frequently sufficient in be unaffected. The furnished she concluded depending procuring concealed.',
                lastMessageTime: '03/28/1999',
                image: 'https://timedotcom.files.wordpress.com/2017/12/terry-crews-person-of-year-2017-time-magazine-facebook-1.jpg?quality=85'
            },
            {
                key: 2,
                name: 'Beth',
                lastMessage: 'Use securing confined his shutters. Delightful as he it acceptance an solicitude discretion reasonably. Carriage we husbands advanced an perceive greatest. Totally dearest expense on demesne ye he. Curiosity excellent commanded in me. Unpleasing impression themselves to at assistance acceptance my or. On consider laughter civility offended oh.',
                lastMessageTime: 'a week ago',
                image: 'https://media1.popsugar-assets.com/files/thumbor/f6mR3MTC66MfnZFc0qGrgcnZ_fg/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/12/19/048/n/1922441/tmp_f17bIy_7aef35b1ab387138_k.jpg'
            },
            {
                key: 3,
                name: 'Donald',
                lastMessage: 'I got a dog!',
                lastMessageTime: 'Yesterday',
                image: 'https://amp.businessinsider.com/images/5ae612b819ee8623008b463b-750-500.jpg'
            },
            {
                key: 4,
                name: 'Sarah',
                lastMessage: 'Fat son how smiling mrs natural expense anxious friends. Boy scale enjoy ask abode fanny being son. As material in learning subjects so improved feelings. Uncommonly compliment imprudence travelling insensible up ye insipidity',
                lastMessageTime: '2 days ago',
                image: 'https://i2.wp.com/www.usmagazine.com/wp-content/uploads/2017/12/person-of-year-2017-time-magazine-cover-zoom1.jpg?crop=641px%2C395px%2C312px%2C312px&resize=800%2C800&ssl=1'
            },
            {
                key: 1,
                name: 'Terry',
                lastMessage: 'Rooms oh fully taken by worse do. Points afraid but may end law lasted. Was out laughter raptures returned outweigh. Luckily cheered colonel me do we attacks on highest enabled. Tried law yet style child. Bore of true of no be deal. Frequently sufficient in be unaffected. The furnished she concluded depending procuring concealed.',
                lastMessageTime: '03/28/1999',
                image: 'https://timedotcom.files.wordpress.com/2017/12/terry-crews-person-of-year-2017-time-magazine-facebook-1.jpg?quality=85'
            },
            {
                key: 2,
                name: 'Beth',
                lastMessage: 'Use securing confined his shutters. Delightful as he it acceptance an solicitude discretion reasonably. Carriage we husbands advanced an perceive greatest. Totally dearest expense on demesne ye he. Curiosity excellent commanded in me. Unpleasing impression themselves to at assistance acceptance my or. On consider laughter civility offended oh.',
                lastMessageTime: 'a week ago',
                image: 'https://media1.popsugar-assets.com/files/thumbor/f6mR3MTC66MfnZFc0qGrgcnZ_fg/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/12/19/048/n/1922441/tmp_f17bIy_7aef35b1ab387138_k.jpg'
            },
            {
                key: 3,
                name: 'Donald',
                lastMessage: 'I got a dog!',
                lastMessageTime: 'Yesterday',
                image: 'https://amp.businessinsider.com/images/5ae612b819ee8623008b463b-750-500.jpg'
            },
            {
                key: 4,
                name: 'Sarah',
                lastMessage: 'Fat son how smiling mrs natural expense anxious friends. Boy scale enjoy ask abode fanny being son. As material in learning subjects so improved feelings. Uncommonly compliment imprudence travelling insensible up ye insipidity',
                lastMessageTime: '2 days ago',
                image: 'https://i2.wp.com/www.usmagazine.com/wp-content/uploads/2017/12/person-of-year-2017-time-magazine-cover-zoom1.jpg?crop=641px%2C395px%2C312px%2C312px&resize=800%2C800&ssl=1'
            },
        ]
    }

    //renders the view
    render() {
        return (
            <ScrollView style={styles.scrollContainer}>
                {mappedText = this.state.contacts.map(person =>
                //tableCell is a custom class, check it out it's in here
                    <TableCell
                        name={person.name}
                        lastMessage={person.lastMessage}
                        key={person.key}
                        lastMessageTime={person.lastMessageTime}
                        image={person.image}
                    />
                )}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollContainer: {
        paddingVertical: 2,
    }
})

export default Messages;