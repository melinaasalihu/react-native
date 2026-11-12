import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Project = (props) => {
    return (
        <View style={styles.container}>
            <Image source={props.first} style={styles.image} />
            <Image source={props.second} style={styles.image} />
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
    }
})
export default Project;
