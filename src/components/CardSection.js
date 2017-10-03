import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );

};

const styles = {
    containerStyle: {
        borderWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderBottomWidth: 0,
        position: 'relative'
    }
};
export default CardSection;