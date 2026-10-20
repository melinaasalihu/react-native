import React from 'react';
import {Text , View , StyleSheet , FlatList } from 'react-native';


const students = [
    {name: 'Melina', surname: 'Salihu', age:'18'},
    {name: 'Ela', surname: 'Sadiku', age:'20'},
    {name: 'Arta', surname: 'Hoxha', age:'19'},
]




const ListScreen = (props) =>{
    return(
        <View>
            <Text style={styles.text}>List of Students</Text>
            <FlatList 
            horizontal={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={student => student.name}
            data={students}
            renderItem={({item})=>{
                return (
                    <Text style={styles.item}>
                      {item.name} {item.surname} {item.age}
                    </Text>
                  );
            }}
            />
        </View> 
    );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 20,
  },
  item: {
    fontSize: 20,
    color: 'black',
    marginVertical: 10,
  },
}); 

export default ListScreen;