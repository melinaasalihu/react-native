import React from "react"; 
import { View, Text, FlatList, StyleSheet } from "react-native";
import data from "../assets/countries.json";

class CountriesScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            countries: data
        }
    }


componentDidMount(){
    this.setState({
        countries: data
    })
}

render(){
    return(
        <View>
            <Text style={styles.screentitle}>Countries Screen</Text>
            <FlatList
                data={this.state.countries}
                keyExtractor={countries => countries.id}
                renderItem={({item}) => (
                    <View style={styles.cardWrapper}>
                        <Text>City Name {item.name}</Text>
                        <Text>Country name: {item.country}</Text>
                        <Text>City Desc: {item.desc}</Text>
                    </View>
                )}
            />
        </View>
    )
}
}

const styles = StyleSheet.create({
    screentitle: {
        fontSize: 20,
        textAlign: "center",
        marginVertical: 15,
        fontWeight: "bold"
    },
    cardWrapper: {
        backgroundColor: 'lightblue',
        marginVertical: 5
    }
})
export default CountriesScreen;
