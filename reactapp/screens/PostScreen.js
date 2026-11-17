import React from "react"; 
import { View, Text, StyleSheet, FlatList } from "react-native";


class PostScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            posts: []
        };
    }
    
async componentDidMount() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await data.json();
    this.setState({ posts: jsonData });
}
 
render(){
    const { posts } = this.state
    return(
        <View>
            <Text>Posts</Text>
            <FlatList
            keyExtractor={posts => posts.id}
            data={posts} renderItem={({ item })=> (
                <View>
                    <Text>{item.title}</Text>
                    <Text>{item.id}</Text>
                </View>
    )} 
            />
       </View>
    );
}

}

// const styles = StyleSheet.create({
// });
export default PostScreen;
