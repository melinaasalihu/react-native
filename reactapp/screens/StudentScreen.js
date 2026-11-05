import react from "react";
import { View, Text, StyleSheet,} from "react-native";
import StudentDetails from "../components/StudentDetails";

const StudentScreen = () => {
    return (
        <View>
            <Text style={styles.text}>Student Screen</Text>
            <StudentDetails name="Melina" image={require("../assets/a.jpg")} description="Marketing digjital"/>
            <StudentDetails name="Dion" image={require("../assets/a.jpg")} description="Shkeca Kompjuterike"/>
            <StudentDetails name="Reina" image={require("../assets/a.jpg")} description="Sami Frasheri"/>
        
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        fontSize: 20,
        marginVertical: 20
    }
});
export default StudentScreen;