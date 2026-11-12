import React from "react";
import { View, Text, StyleSheet } from "react-native";

const studentInfo = (props)=> {
    return (
     <View>
            <image source={props.image} />
        <View>
            <Text style={styles.fullname}>{props.fullname}</Text>
            <Text style={styles.jobPosition}>{props.jobPosition}</Text>
            <Text style={styles.desc}>{props.desc}</Text>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Hire him</Text>
            </TouchableOpacity>
        </View>
     </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: "100%",
        height: 200,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    infoWrapper: {
        backgroundColor: '#fff',
        width: '80%',
        alignItems: 'center',
        marginLeft: '40%',
        marginTop: '-30%',
        borderRadius: 20,
        padding: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    fullname: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    desc: {
        textAlign: 'center',
    },
    btn:{
        backgroundColor: '#f00',
        borderRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 10,
    },
    btnText: {
        fontWeight: 'bold',
        color: '#fff',
        textTransform: 'uppercase',
    }

});

export default studentInfo;